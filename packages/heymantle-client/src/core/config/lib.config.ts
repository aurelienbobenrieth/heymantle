import { object, parse, string } from "valibot";

const ConfigSchema = object({
  public: object({
    mantle: object({
      apiRootUrl: string(),
      apiVersions: object({
        v1: string(),
      }),
    }),
  }),
});

export const libConfig = parse(ConfigSchema, {
  public: {
    mantle: {
      apiRootUrl: "https://appapi.heymantle.com",
      apiVersions: {
        v1: "v1",
      },
    },
  },
});
