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
import { UsageSchema } from "./Usage";

export const CustomerSchema = object({
  id: string(),
  test: boolean(),
  plans: array(PlanSchema),
  subscription: nullable(string()),
  features: array(FeatureSchema),
  usage: record(string(), UsageSchema),
  customFields: record(string(), string()),
});

export type Customer = Output<typeof CustomerSchema>;
