import { object, parse, string } from "valibot";

const ConfigSchema = object({
  public: object({
    mantle: object({
      apiUrl: string(),
    }),
  }),
});

export const libConfig = parse(ConfigSchema, {
  public: {
    mantle: {
      apiUrl: "https://appapi.heymantle.com/v1",
    },
  },
});
