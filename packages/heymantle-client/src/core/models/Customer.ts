import {
  type Output,
  array,
  boolean,
  nullable,
  number,
  object,
  record,
  string,
  union,
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
  customFields: record(string(), union([string(), number()])),
});

export type Customer = Output<typeof CustomerSchema>;
