import { type Output, nullable, number, object, string } from "valibot";

export const UsageSchema = object({
  id: string(),
  name: string(),
  eventName: string(),
  currentValue: number(),
  monthToDateValue: nullable(number()),
  last_24HoursValue: nullable(number()),
  last_7DaysValue: nullable(number()),
  last_30DaysValue: nullable(number()),
  last_90DaysValue: nullable(number()),
  last_365DaysValue: nullable(number()),
  allTimeValue: nullable(number()),
});

export type Usage = Output<typeof UsageSchema>;
