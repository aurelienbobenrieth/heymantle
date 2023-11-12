# @heymantle/client

This repository contains a Javascript/Typescript SDK for [Mantle's API].

## Requirements

This SDK utilizes fetch for both Node and the Browser environments and uses ECMAScript Modules (ESM). Therefore, it requires:

- Node.js version 18.0.0 or higher
- A modern browser (supporting ES Modules)

## Using this in your project

### Installation

To install the SDK, run:

```bash
pnpm add @heymantle/client
```

### Creating a client instance

To use the SDK, instantiate a new client as follows:

```typescript
import { MantleClient } from "@heymantle/client";

const client = MantleClient.withApiKey({
  appId: "<YOUR_APP_ID>",
  appApiKey: "<YOUR_APP_API_KEY>",
});
```

Attempting to instantiate a client with `withApiKey` directly in a browser will result in an error.

### Identify

Refer to the [Mantle endpoint API documentation](https://heymantle.com/docs/api/identify-customer/) for identifying customers.

See the [SDK Endpoint source code](./src/endpoints/identify/IdentifyEndpoint.ts) for implementation details.

#### Identify a customer

Use the following code snippet to identify a customer:

```typescript
await client.identify.identifyCustomer({
  platform: "<PLATFORM>",
  platformId: "<PLATFORM_ID>",
  myshopifyDomain: "<MYSHOPIFY_DOMAIN>",
  name: "<NAME>",
  email: "<EMAIL>",
  accessToken: "<ACCESS_TOKEN>",
});
```

### Customer

For customer-related API endpoints, visit [Mantle's customer endpoint documentation](https://heymantle.com/docs/api/customer/).

Check out the [SDK Endpoint for customers](./src/endpoints/customer/CustomerEndpoint.ts) (corrected from CustomeryEndpoint to CustomerEndpoint).

#### Get a customer

Retrieve customer information by calling:

```typescript
await client.customer.get("<MANTLE_CUSTOMER_API_TOKEN>");
```

### Subscriptions

For managing subscriptions via Mantle's API, consult the [subscriptions documentation](https://heymantle.com/docs/api/subscriptions/).

Access the [SubscriptionsEndpoint in the SDK](./src/endpoints/subscriptions/SubscriptionsEndpoint.ts).

#### Create a subscription for a customer

To create a subscription for a customer:

```typescript
await client.subscriptions.create("<MANTLE_CUSTOMER_API_TOKEN>", {
  planId: "<PLAN_ID>",
  returnUrl: "<RETURN_URL>",
});
```

#### Update a customer subscription

Update a customer subscription by specifying a new capped amount:

```typescript
await client.subscriptions.update("<MANTLE_CUSTOMER_API_TOKEN>", {
  id: "<PLAN_ID>",
  cappedAmount: "<NEW_AMOUNT>",
});
```

#### Cancel all active subscriptions for a customer

Cancel all active subscriptions for a customer by:

```typescript
await client.subscriptions.cancel("<MANTLE_CUSTOMER_API_TOKEN>");
```

### Usage events

For sending usage events, reference the [usage events API documentation](https://heymantle.com/docs/api/usage-events/).

The corresponding [SDK Endpoint](./src/endpoints/usage-events/UsageEvents.ts) is available for more details.

#### Send a usage event

Send a custom usage event with the following command:

```typescript
await client.usageEvents.send("<MANTLE_CUSTOMER_API_TOKEN>", {
  eventName: "<SOME_CUSTOM_EVENT_NAME>",
  properties: {
    someCustomProperty: "<SOME_CUSTOM_PROPERTY_VALUE>",
  },
});
```

### Webhooks

For webhook verification steps, see the [webhooks API documentation](https://heymantle.com/docs/api/webhooks/).

The [Webhooks SDK endpoint](./src/webhooks/Webhooks.ts) provides the method to validate Mantle webhooks.

#### Validate Mantle webhook authenticity

Validate the authenticity of a Mantle webhook as follows:

```typescript
const { valid } = client.webhooks.validate({
  headers: "<REQUEST_HEADERS>",
  body: "<REQUEST_BODY>",
});
```

## Contributing

### Running the tests

To run the tests, you'll need:

- A [Shopify Partners] account
- A [Mantle] account

Create a new Shopify development store and a Shopify app. Configure [Mantle] with your Shopify app credentials.

Then, create a `.env.test` file using the template provided in [.env.example](./.env.example) and populate it with the necessary data.

[Shopify Partners]: https://partners.shopify.com
[Mantle]: https://heymantle.com
[Mantle's API]: https://heymantle.com/docs/api
