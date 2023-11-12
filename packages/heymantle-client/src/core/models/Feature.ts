import {
  type Output,
  boolean,
  literal,
  nullable,
  number,
  object,
  optional,
  string,
  union,
} from "valibot";

import { UsageSchema } from "./Usage";

export const FeatureTypeSchema = union([
  literal("boolean"),
  literal("limit"),
  literal("limit_with_overage"),
]);

export const FeatureSchema = object({
  id: string(),
  name: string(),
  type: FeatureTypeSchema,
  description: string(),
  value: nullable(union([boolean(), string()])),
  usage: optional(nullable(UsageSchema)),
  displayOrder: optional(number()),
});

export type FeatureType = Output<typeof FeatureTypeSchema>;
export type Feature = Output<typeof FeatureSchema>;
