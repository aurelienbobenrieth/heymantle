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
import { SubscriptionsCreateInput, SubscriptionsUpdateInput } from "./types";

describe("SubscriptionsEndpoint", () => {
  let sut: MantleClient;
  const sutFailingCreateConfig: SubscriptionsCreateInput = {
    planId: "<INVALID_PLAN_ID>",
    returnUrl: "<INVALID_RETURN_URL>",
  };
  const sutValidCreateConfig: SubscriptionsCreateInput = {
    planId: testConfig.private.mantle.planId,
    returnUrl: "https://example.com",
    region: "true",
  };

  beforeEach(() => {
    sut = buildWithApiKeyClientInstance();
  });

  describe("create", () => {
    it("should respond with an error message when invalid data is provided", async () => {
      const result = await sut.subscriptions.create(
        sutFailingMantleCustomerApiToken,
        sutFailingCreateConfig,
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
        sutValidCreateConfig,
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

  describe("update", () => {
    it("should respond with an error message when invalid data is provided", async () => {
      const sutFailingConfig: SubscriptionsUpdateInput = {
        id: "b662c5bd-f4c5-4aea-b377-254449a5633b",
      };

      const result = await sut.subscriptions.update(
        sutValidMantleCustomerApiToken,
        sutFailingConfig,
      );

      if ("error" in result) {
        expect(result).toHaveProperty("error");
        expect(result.error).toBeTypeOf("string");
      } else {
        expect.fail("Expected an error response");
      }
    });

    /**
     * Not implemented yet because we cannot programmatically activate a subscription yet
     *
     * Also there currently is an issue with the update of a Shopify subscription `cappedAmount`
     * for subscriptions with tier based pricing.
     *
     */
    it.todo("@todo: should respond with the appropriate object/data");
  });

  describe("cancel", () => {
    it("should respond with an error message when invalid data is provided", async () => {
      const result = await sut.subscriptions.cancel(
        sutFailingMantleCustomerApiToken,
      );

      if ("error" in result) {
        expect(result).toHaveProperty("error");
        expect(result.error).toBeTypeOf("string");
      } else {
        expect.fail("Expected an error response");
      }
    });

    /**
     * Not implemented yet because we cannot programmatically activate a subscription yet
     *
     */
    it.todo("@todo: should respond with the appropriate object/data");
  });
});
