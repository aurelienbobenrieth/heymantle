import {
  type Output,
  nullable,
  number,
  object,
  optional,
  string,
} from "valibot";

import { UsageChargeSchema } from "./UsageCharge";

export const UsageMetricSchema = object({
  id: string(),
  name: string(),
  eventName: string(),
  currentValue: number(),
  monthToDateValue: optional(nullable(number())),
  last_24HoursValue: optional(nullable(number())),
  last_7DaysValue: optional(nullable(number())),
  last_30DaysValue: optional(nullable(number())),
  last_90DaysValue: optional(nullable(number())),
  last_365DaysValue: optional(nullable(number())),
  allTimeValue: optional(nullable(number())),
  usageCharge: optional(UsageChargeSchema),
});

export type Usage = Output<typeof UsageMetricSchema>;
