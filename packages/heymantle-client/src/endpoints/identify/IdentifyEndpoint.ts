import { routesV1 } from "#core/config/routes.config";
import "#core/libs/env/dotenv.lib";

import EndpointsBase from "../EndpointsBase";
import { IdentifyCustomerInput, IdentifyCustomerResponse } from "./types";

export default class IdentifyEndpoint extends EndpointsBase {
  /**
   * Identifies a customer and retrieves an API token from Mantle for further interactions.
   * This token allows Mantle to enrich the customer data and interact with third-party
   * platforms like Shopify or Stripe. The identification process requires certain customer
   * details such as name, email, and platform-specific identifiers. For Shopify merchants,
   * the unique `myshopifyDomain` must also be provided along with the access token obtained
   * from the Shopify OAuth process.
   *
   * @async
   * @function identifyCustomer
   * @param {IdentifyCustomerInput} identifyCustomerInput - The customer details required for identification.
   * @param {string} identifyCustomerInput.platform - The platform on which the customer is to be identified, e.g., "shopify" or "stripe".
   * @param {string} identifyCustomerInput.platformId - The customer ID specific to the platform (Shopify Shop ID or Stripe customer ID).
   * @param {string} identifyCustomerInput.email - The customer's email address.
   * @param {string} [identifyCustomerInput.myshopifyDomain] - The unique myshopify.com domain for the shop (required if platform is 'shopify').
   * @param {string} identifyCustomerInput.name - The name of the customer.
   * @param {string} identifyCustomerInput.accessToken - The access token for the customer obtained from the platform API.
   * @returns {Promise<IdentifyCustomerResponse>} A promise that resolves to the API token used to authenticate requests to Mantle.
   */
  public async identifyCustomer({
    platform,
    platformId,
    myshopifyDomain,
    name,
    email,
    accessToken,
  }: IdentifyCustomerInput): Promise<IdentifyCustomerResponse> {
    return await this.postRequest<
      IdentifyCustomerResponse,
      IdentifyCustomerInput
    >({
      url: routesV1.api.identify,
      body: {
        platform,
        platformId,
        myshopifyDomain,
        name,
        email,
        accessToken,
      },
    });
  }
}
