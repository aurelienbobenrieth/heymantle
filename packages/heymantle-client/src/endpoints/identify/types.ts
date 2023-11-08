import { MyshopifyDomain } from "#types/shopify.types";
import { UnknownJson } from "#types/utils.types";

type SupportedPlatform = "stripe" | "shopify";

export interface IdentifyCustomerInput extends UnknownJson {
  // customer access token for the platform API - The access token obtained from authenticating with your customer
  accessToken: string;
  // customer email
  email: string;
  // if platform is shopify, this is the unique myshopify.com domain for the shop
  // only required if platform === 'shopify'
  myshopifyDomain?: MyshopifyDomain;
  // customer name
  name: string;
  // platform name, such as “shopify” or “stripe”
  platform: SupportedPlatform;
  // customer ID on the platform, this is the Shopify Shop ID or Stripe customer ID
  platformId: string;
}

export interface IdentifyCustomerSuccessResponse {
  // API token used to authenticate requests to Mantle on behalf of the customer.
  // this can be used in front-end requests to Mantle.
  apiToken: string;
}

export interface IdentifyCustomerErrorResponse {
  // error message
  error: string;
}

export type IdentifyCustomerResponse =
  | IdentifyCustomerSuccessResponse
  | IdentifyCustomerErrorResponse;
