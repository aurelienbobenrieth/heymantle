import { beforeEach, describe, expect, it } from "vitest";

import "#core/libs/env/dotenv.lib";
import { buildWithApiKeyClientInstance } from "#test/MantleClientBuilder";
import {
  validPlanUpdatedWebhookBody,
  validPlanUpdatedWebhookHeaders,
} from "#test/data/webhooks/validPlanUpdatedWebhook";

import MantleClient from "../MantleClient";
import { WebhooksValidateErrorReason } from "./types";

describe("Webhooks", () => {
  let sut: MantleClient;

  beforeEach(() => {
    sut = buildWithApiKeyClientInstance();
  });

  describe("send", () => {
    it("should responde with a falsy boolean object when NOT coming from Mantle", async () => {
      const forgedWebhookHeaders = {
        "X-Timestamp": "1699809654",
        "X-Mantle-Webhook-Topic": "plans/update",
        "X-Mantle-Hmac-SHA256": "<INVALID_SIGNATURE>",
      };

      const result = await sut.webhooks.validate({
        headers: new Headers(forgedWebhookHeaders),
        body: validPlanUpdatedWebhookBody,
      });

      expect(result).toHaveProperty("valid");
      expect(result.valid).toBe(false);
      expect(result).toHaveProperty("reason");
      expect(result.reason).toBe(WebhooksValidateErrorReason.InvalidSignature);
    });

    it("should respond with with a valid boolean object when coming from Mantle", async () => {
      const result = await sut.webhooks.validate({
        headers: new Headers(validPlanUpdatedWebhookHeaders),
        body: validPlanUpdatedWebhookBody,
      });

      expect(result).toHaveProperty("valid");
      expect(result.valid).toBe(true);
    });
  });
});
