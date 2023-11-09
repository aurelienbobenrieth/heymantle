import {
  type Output,
  array,
  boolean,
  nullable,
  number,
  object,
  optional,
  record,
  string,
} from "valibot";

import { DiscountSchema } from "./Discount";
import { FeatureSchema } from "./Feature";
import { PlanSchema } from "./Plan";
import { UsageSchema } from "./Usage";

export const SubscriptionSchema = object({
  id: string(),
  plan: PlanSchema,
  active: boolean(),
  activatedAt: nullable(string()),
  canceledAt: nullable(string()),
  frozenAt: nullable(string()),
  features: record(string(), FeatureSchema),
  featuresOrder: array(string()),
  usageCharges: array(UsageSchema),
  createdAt: string(),
  confirmationUrl: string(),
  shopifySubscription: object({
    id: string(),
  }),
  appliedDiscount: nullable(DiscountSchema),
  subtotal: number(),
  total: optional(number()),
});

export type Subscription = Output<typeof SubscriptionSchema>;
