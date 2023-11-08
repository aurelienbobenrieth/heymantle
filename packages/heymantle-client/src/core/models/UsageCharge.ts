import { type Output, literal, number, object, string, union } from "valibot";

export const UsageChargeTypeSchema = union([literal('percent'),literal("unit"), literal("unit_limits")]);

export const UsageChargeSchema = object({
  id: string(),
  amount: number(),
  type: UsageChargeTypeSchema,
  terms: string(),
  cappedAmount: number(),
  eventName: string(),
});

export type UsageChargeType = Output<typeof UsageChargeTypeSchema>;
export type UsageCharge = Output<typeof UsageChargeSchema>;