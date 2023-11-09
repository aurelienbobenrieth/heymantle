import { safeParse } from "valibot";
import { beforeEach, describe, expect, it } from "vitest";

import "#core/libs/env/dotenv.lib";
import { SubscriptionSchema } from "#core/models/Subscription";
import { testConfig } from "#test/config/test.config";
import {
  sutFailingMantleCustomerApiToken,
  sutValidMantleCustomerApiToken,
} from "#test/data/mantle-customer-token";

import MantleClient from "../../MantleClient";
import { buildWithApiKeyClientInstance } from "../../test/MantleClientBuilder";
import { SubscriptionsCreateInput } from "./types";

describe("SubscriptionsEndpoint", () => {
  let sut: MantleClient;
  const sutFailingConfig: SubscriptionsCreateInput = {
    planId: "<INVALID_PLAN_ID>",
    returnUrl: "<INVALID_RETURN_URL>",
  };
  const sutValidConfig: SubscriptionsCreateInput = {
    planId: testConfig.private.mantle.planId,
    returnUrl: "https://example.com",
  };

  beforeEach(() => {
    sut = buildWithApiKeyClientInstance();
  });

  describe("create", () => {
    it("should respond with an error message when invalid data is provided", async () => {
      const result = await sut.subscriptions.create(
        sutFailingMantleCustomerApiToken,
        sutFailingConfig,
      );

      if ("error" in result) {
        expect(result).toHaveProperty("error");
        expect(result.error).toBeTypeOf("string");
      } else {
        expect.fail("Expected an error response");
      }
    });

    it("should respond with a subscription object", async () => {
      const result = await sut.subscriptions.create(
        sutValidMantleCustomerApiToken,
        sutValidConfig,
      );

      if ("error" in result) {
        expect.fail("Expected a success response with a subscription object");
      } else {
        const parseResult = safeParse(SubscriptionSchema, result);

        if (!parseResult.success)
          expect.fail("Response did not match the expected schema");
      }
    });
  });
});
