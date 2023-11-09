import { type Output, record, string } from "valibot";

import { UsageMetricSchema } from "./UsageMetric";

export const UsageSchema = record(string(), UsageMetricSchema);

export type Usage = Output<typeof UsageSchema>;
