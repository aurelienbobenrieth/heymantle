import { object, safeParse } from "valibot";
import { beforeEach, describe, expect, it } from "vitest";

import "#core/libs/env/dotenv.lib";
import { CustomerSchema } from "#core/models/Customer";
import {
  sutFailingMantleCustomerApiToken,
  sutValidMantleCustomerApiToken,
} from "#test/data/mantle-customer-token";

import MantleClient from "../../MantleClient";
import { buildWithApiKeyClientInstance } from "../../test/MantleClientBuilder";

describe("CustomerEndpoint", () => {
  let sut: MantleClient;

  beforeEach(() => {
    sut = buildWithApiKeyClientInstance();
  });

  describe("get", () => {
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
        const CustomerGetResonseSchema = object({
          customer: CustomerSchema,
        });

        const parseResult = safeParse(CustomerGetResonseSchema, result);

        if (!parseResult.success)
          expect.fail("Response did not match the expected schema");
      }
    });
  });
});
