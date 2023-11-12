import { beforeEach, describe, expect, it } from "vitest";

import "#core/libs/env/dotenv.lib";
import {
  sutFailingMantleCustomerApiToken,
  sutValidMantleCustomerApiToken,
} from "#test/data/mantle-customer-token";

import MantleClient from "../../MantleClient";
import { buildWithApiKeyClientInstance } from "../../test/MantleClientBuilder";
import { UsageEventsSendInput, UsageEventsSendResponse } from "./types";

describe("UsageEventsEndpoint", () => {
  let sut: MantleClient;
  // @ts-expect-error: intentionally invalid
  const sutFailingConfig: UsageEventsSendInput = {};
  const sutValidConfig: UsageEventsSendInput = {
    eventName: "@heymantle/client/it-test",
    properties: {},
  };

  beforeEach(() => {
    sut = buildWithApiKeyClientInstance();
  });

  describe("send", () => {
    it("should respond with an error message when invalid data is provided", async () => {
      const result = await sut.usageEvents.send(
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

    it("shuld response with a success json object", async () => {
      const result = await sut.usageEvents.send(
        sutValidMantleCustomerApiToken,
        sutValidConfig,
      );

      if ("error" in result) {
        expect.fail("Expected an error response");
      } else {
        expect(result).toHaveProperty("success");
        expect(result.success).toBe(true);
      }
    });
  });
});
