import { Output, literal, union } from "valibot";

export const CurrencyCodeSchema = union([
  literal("USD"),
  literal("EUR"),
  literal("JPY"),
  literal("GBP"),
  literal("AUD"),
  literal("CAD"),
  literal("CHF"),
  literal("CNY"),
  literal("SEK"),
  literal("NZD"),
]);

export type CurrencyCode = Output<typeof CurrencyCodeSchema>;
