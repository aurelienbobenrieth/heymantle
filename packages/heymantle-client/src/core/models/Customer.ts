import {
  type Output,
  array,
  boolean,
  nullable,
  object,
  record,
  string,
} from "valibot";

import { FeatureSchema } from "./Feature";
import { PlanSchema } from "./Plan";
import { SubscriptionSchema } from "./Subscription";
import { UsageSchema } from "./Usage";

export const CustomerSchema = object({
  id: string(),
  test: boolean(),
  plans: array(PlanSchema),
  subscription: nullable(SubscriptionSchema),
  features: record(string(), FeatureSchema),
  usage: UsageSchema,
  customFields: record(string(), string()),
});

export type Customer = Output<typeof CustomerSchema>;
