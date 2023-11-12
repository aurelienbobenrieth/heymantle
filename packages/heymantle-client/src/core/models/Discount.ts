import { type Output, nullable, number, object, string } from "valibot";

import { CurrencyCodeSchema } from "#types/money.types";

export const DiscountSchema = object({
  id: string(),
  amount: number(),
  amountCurrencyCode: nullable(CurrencyCodeSchema),
  percentage: nullable(number()),
  durationLimitInIntervals: number(),
  discountedAmount: number(),
});

export type Discount = Output<typeof DiscountSchema>;
