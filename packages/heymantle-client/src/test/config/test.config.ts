import { literal, object, parse, regex, string, union } from "valibot";

import "#core/libs/env/dotenv.lib";

const SupportedPlatformSchema = union([literal("shopify"), literal("stripe")]);
const MyshopifyDomainSchema = regex(/^[a-zA-Z0-9][a-zA-Z0-9-]*.myshopify.com/);
const ConfigSchema = object({
  private: object({
    mantle: object({
      appId: string(),
      appApiKey: string(),
    }),
    testPlatform: SupportedPlatformSchema,
    shopify: object({
      testShop: object({
        id: string(),
        myshopifyDomain: string([MyshopifyDomainSchema]),
        accessToken: string(),
        name: string(),
        email: string(),
      }),
    }),
  }),
});

export const testConfig = parse(ConfigSchema, {
  private: {
    mantle: {
      appId: process.env.MANTLE_APP_ID,
      appApiKey: process.env.MANTLE_APP_API_KEY,
    },
    testPlatform: process.env.TEST_PLATFORM,
    shopify: {
      testShop: {
        id: process.env.SHOPIFY_TEST_SHOP_ID,
        myshopifyDomain: process.env.SHOPIFY_TEST_SHOP_MYSHOPIFY_DOMAIN,
        accessToken: process.env.SHOPIFY_TEST_SHOP_ACCESS_TOKEN,
        name: process.env.SHOPIFY_TEST_SHOP_NAME,
        email: process.env.SHOPIFY_TEST_SHOP_EMAIL,
      },
    },
  },
});
