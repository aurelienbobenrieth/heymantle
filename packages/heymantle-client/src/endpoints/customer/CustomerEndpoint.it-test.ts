import fs from "fs";
import { object, safeParse } from "valibot";
import { beforeEach, describe, expect, it } from "vitest";

import "#core/libs/env/dotenv.lib";
import { CustomerSchema } from "#core/models/Customer";
import { testConfig } from "#test/config/test.config";

import MantleClient from "../../MantleClient";
import { buildWithApiKeyClientInstance } from "../../test/MantleClientBuilder";

describe("CustomerEndpoint", () => {
  let sut: MantleClient;
  const sutFailingMantleCustomerApiToken =
    "<INVALID_MANTLE_CUSTOMER_API_TOKEN>";
  const sutValidMantleCustomerApiToken =
    testConfig.private.shopify.testShop.mantleCustomerApiToken;

  beforeEach(() => {
    sut = buildWithApiKeyClientInstance();
  });

  it("should respond with an error message when invalid data is provided", async () => {
    const result = await sut.customer.get(sutFailingMantleCustomerApiToken);

    if ("error" in result) {
      expect(result).toHaveProperty("error");
      expect(result.error).toBeTypeOf("string");
    } else {
      expect.fail("Expected an error response");
    }
  });

  it("should respond with a customer object with plans and subscription included", async () => {
    const result = await sut.customer.get(sutValidMantleCustomerApiToken);

    if ("error" in result) {
      expect.fail("Expected a success response with a customer object");
    } else {
      const GetCustomerResponseSchema = object({
        customer: CustomerSchema,
      });

      const parseResult = safeParse(GetCustomerResponseSchema, result);

      // write log in a stdout file
      fs.writeFileSync(
        "./stdout.log",
        JSON.stringify(parseResult, null, 2),
        "utf8",
      );

      if (!parseResult.success)
        expect.fail("Response did not match the expected schema");
    }
  });
});
