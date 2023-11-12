import crypto from "crypto";

import MantleClient from "../MantleClient";
import {
  WebhooksValidateErrorReason,
  WebhooksValidateInput,
  WebhooksValidateResponse,
} from "./types";

export default class Webhooks {
  constructor(protected client: MantleClient) {}

  public validate({
    headers,
    body,
  }: WebhooksValidateInput): WebhooksValidateResponse {
    const signature = headers.get("X-Mantle-Hmac-SHA256");
    const timestamp = headers.get("X-Timestamp");

    if (!signature || !timestamp) {
      return {
        valid: false,
        reason: WebhooksValidateErrorReason.MissingHeaders,
      };
    }

    if (!body) {
      return {
        valid: false,
        reason: WebhooksValidateErrorReason.MissingBody,
      };
    }

    const signingData = `${timestamp}.${JSON.stringify(body)}`;

    const expectedSignature = crypto
      .createHmac("sha256", this.client.getAppApiKey())
      .update(signingData)
      .digest("hex");

    const isSignatureValid = signature === expectedSignature;

    if (!isSignatureValid) {
      return {
        valid: false,
        reason: WebhooksValidateErrorReason.InvalidSignature,
      };
    }

    return { valid: true };
  }
}
