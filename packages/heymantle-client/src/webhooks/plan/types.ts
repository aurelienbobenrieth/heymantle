import { Plan } from "#core/models/Plan";

import { WebhookTopic } from "../types";

export interface PlanCreated extends Plan {
  topic: WebhookTopic.PLAN_CREATED;
}

export interface PlanUpdated extends Plan {
  topic: WebhookTopic.PLAN_UPDATED;
}
