import { beforeEach, describe, expect, it } from "vitest";

import "#core/libs/env/dotenv.lib";
import { testConfig } from "#test/config/test.config";
import { MyshopifyDomain } from "#types/shopify.types";

import MantleClient from "../../MantleClient";
import { buildWithApiKeyClientInstance } from "../../test/MantleClientBuilder";
import { IdentifyCustomerInput, IdentifyCustomerResponse } from "./types";

describe("IdentifyEndpoint", () => {
  let sut: MantleClient;
  const sutFailingConfig: IdentifyCustomerInput = {
    // @ts-expect-error: intentionally invalid
    platform: "<INVALID_PLATFORM>",
    platformId: "<INVALID_PLATFORM_ID>",
    // @ts-expect-error: intentionally invalid
    myshopifyDomain: "<INVALID_MYSHOPIFY_DOMAIN>",
    name: "<INVALID_NAME>",
    email: "<INVALID_EMAIL>",
    accessToken: "<INVALID_ACCESS_TOKEN>",
  };
  const sutValidConfig: IdentifyCustomerInput = {
    platform: testConfig.private.testPlatform,
    platformId: testConfig.private.shopify.testShop.id,
    myshopifyDomain: testConfig.private.shopify.testShop
      .myshopifyDomain as MyshopifyDomain,
    name: testConfig.private.shopify.testShop.name,
    email: testConfig.private.shopify.testShop.email,
    accessToken: testConfig.private.shopify.testShop.accessToken,
  };

  beforeEach(() => {
    sut = buildWithApiKeyClientInstance();
  });

  describe("identifyCustomer", () => {
    it("should respond with an error message when invalid data is provided", async () => {
      const result: IdentifyCustomerResponse =
        await sut.identify.identifyCustomer(sutFailingConfig);

      if ("error" in result) {
        expect(result).toHaveProperty("error");
        expect(result.error).toBeTypeOf("string");
      } else {
        expect.fail("Expected an error response");
      }
    });

    it("should respond with an api token when valid data is provided", async () => {
      const result: IdentifyCustomerResponse =
        await sut.identify.identifyCustomer(sutValidConfig);

      if ("error" in result) {
        expect.fail("Expected a success response with an apiToken");
      } else {
        expect(result).toHaveProperty("apiToken");
        expect(result.apiToken).toBeTypeOf("string");
      }
    });
  });
});
