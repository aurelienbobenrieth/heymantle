import {
  type Output,
  boolean,
  literal,
  nullable,
  number,
  object,
  string,
  union,
} from "valibot";

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
  displayOrder: number(),
});

export type FeatureType = Output<typeof FeatureTypeSchema>;
export type Feature = Output<typeof FeatureSchema>;
