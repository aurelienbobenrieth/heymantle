import { MyshopifyDomain } from "#server/types/shopify.types";

type SupportedPlatform = "stripe" | "shopify";

export interface IdentifyInput {
  // Platform name, such as “shopify” or “stripe”
  platform: SupportedPlatform;

  // Customer ID on the platform, this is the Shopify Shop ID or Stripe customer ID
  platformId: string;

  // If platform is shopify, this is the unique myshopify.com domain for the shop
  // Only required if platform === 'shopify'
  myshopifyDomain?: MyshopifyDomain;

  // Customer name
  name: string;

  // Customer email
  email: string;

  // Customer access token for the platform API - The access token obtained from authenticating with your customer
  accessToken: string;
}

export interface IdentifyResponse {
  // API token used to authenticate requests to Mantle on behalf of the customer.
  // This can be used in front-end requests to Mantle.
  apiToken: string;
}
