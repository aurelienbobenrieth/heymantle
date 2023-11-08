import { type Output, nullable, number, object, string } from "valibot";

export const DiscountSchema = object({
  id: string(),
  amount: number(),
  amountCurrencyCode: nullable(string()),
  percentage: nullable(number()),
  durationLimitInIntervals: number(),
  discountedAmount: number(),
});

export type Discount = Output<typeof DiscountSchema>;
