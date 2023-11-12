import { WebhookTopic } from "../types";

export interface SubscriptionActivated {
  topic: WebhookTopic.SUBSCRIPTION_ACTIVATED;
}

export interface SubscriptionCancelled {
  topic: WebhookTopic.SUBSCRIPTION_CANCELLED;
}

export interface SubscriptionApproachingCappedAmount {
  topic: WebhookTopic.SUBSCRIPTION_APPROACHING_CAPPED_AMOUNT;
}

export interface SubscriptionUsageChargeExceedsCappedAmount {
  topic: WebhookTopic.SUBSCRIPTION_USAGE_CHARGE_EXCEEDS_CAPPED_AMOUNT;
}

export interface SubscriptionCappedAmountUpdated {
  topic: WebhookTopic.SUBSCRIPTION_CAPPED_AMOUNT_UPDATED;
}
