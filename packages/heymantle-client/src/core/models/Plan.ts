import {
  type Output,
  array,
  boolean,
  literal,
  nullable,
  number,
  object,
  optional,
  record,
  string,
  union,
} from "valibot";

import { CurrencyCodeSchema } from "#types/money.types";

import { DiscountSchema } from "./Discount";
import { FeatureSchema } from "./Feature";
import { UsageChargeSchema } from "./UsageCharge";

export const PlanIntervalSchema = union([
  literal("EVERY_30_DAYS"),
  literal("ANNUAL"),
]);

export const PlanSchema = object({
  id: string(),
  name: string(),
  amount: number(),
  currencyCode: CurrencyCodeSchema,
  public: boolean(),
  trialDays: number(),
  interval: PlanIntervalSchema,
  createdAt: string(),
  updatedAt: string(),
  features: record(string(), FeatureSchema),
  featuresOrder: array(string()),
  usageChargeCappedAmount: optional(nullable(number())),
  usageCharges: array(UsageChargeSchema),
  customFields: record(string(), union([string(), number()])),
  discounts: array(DiscountSchema),
  autoAppliedDiscount: optional(nullable(DiscountSchema)),
});

export type PlanInterval = Output<typeof PlanIntervalSchema>;
export type Plan = Output<typeof PlanSchema>;
