import { UnknownJson } from "#types/utils.types";

export enum WebhookTopic {
  INVOICE_CREATED = "invoices/create",
  PLAN_CREATED = "plans/create",
  PLAN_UPDATED = "plans/update",
  SUBSCRIPTION_ACTIVATED = "subscriptions/activate",
  SUBSCRIPTION_CANCELLED = "subscriptions/cancel",
  SUBSCRIPTION_APPROACHING_CAPPED_AMOUNT = "subscriptions/approaching_capped_amount",
  SUBSCRIPTION_USAGE_CHARGE_EXCEEDS_CAPPED_AMOUNT = "subscriptions/usage_charge_exceeds_capped_amount",
  SUBSCRIPTION_CAPPED_AMOUNT_UPDATED = "subscriptions/capped_amount_updated",
}

export interface WebhooksValidateInput {
  body: UnknownJson;
  headers: Headers;
}

export interface WebhooksValidateResponse {
  reason?: WebhooksValidateErrorReason;
  valid: boolean;
}

export enum WebhooksValidateErrorReason {
  MissingHeaders = "missing_headers",
  MissingBody = "missing_body",
  InvalidSignature = "invalid_signature",
}
