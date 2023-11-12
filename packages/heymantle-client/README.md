# @heymantle/client

This repo contains a Javascript/Typescript SDK for [Mantle's API].

## Requirements

Because this SDK uses fetch both in Node and the Browser, and ESM, we require the following:

- Node 18.0.0 or higher
- A modern, version infinite, browser

## Using this in your project

### Installation

```
pnpm add @heymantle/client
```

### Creating a client instance

Because this SDK is meant to be used it is recommended to instanciate a new client this way:

```typescript
import { MantleClient } from "@heymantle/client";

const client = MantleClient.withApiKey({
  appId: "<YOUR_APP_ID>",
  appApiKey: "<YOUR_APP_API_KEY>",
});
```

If you try to instanciate a client `withApiKey` from a browser environment, an error will be thrown.

### Identify

[Mantle endpoint API documentation](https://heymantle.com/docs/api/identify-customer/)

[SDK Endpoint](./src/endpoints/identify/IdentifyEndpoint.ts)

#### Identify a customer

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

[Mantle endpoint API documentation](https://heymantle.com/docs/api/customer/)

[SDK Endpoint](./src/endpoints/customer/CustomeryEndpoint.ts)

#### Get a customer

```typescript
await client.customer.get("<MANTLE_CUSTOMER_API_TOKEN>");
```

### Subscriptions

[Mantle endpoint API documentation](https://heymantle.com/docs/api/subscriptions/)

[SDK Endpoint](./src/endpoints/subscriptions/SubscriptionsEndpoint.ts)

#### Create a subscription for a customer

```typescript
await client.subscriptions.create("<MANTLE_CUSTOMER_API_TOKEN>", {
  planId: "<PLAN_ID>",
  returnUrl: "<RETURN_URL>",
});
```

#### Update a customer subscription

```typescript
await client.subscriptions.update("<MANTLE_CUSTOMER_API_TOKEN>", {
  id: "<PLAN_ID>",
  cappedAmount: "<NEW_AMOUNT>",
});
```

#### Cancel all active subscriptions for a customer

```typescript
await client.subscriptions.cancel("<MANTLE_CUSTOMER_API_TOKEN>");
```

### Usage events

[Mantle endpoint API documentation](https://heymantle.com/docs/api/usage-events/)

[SDK Endpoint](./src/endpoints/usage-events/UsageEvents.ts)

#### Send a usage event

```typescript
await client.usageEvents.send("<MANTLE_CUSTOMER_API_TOKEN>", {
  eventName: "<SOME_CUSTOM_EVENT_NAME>",
  properties: {
    someCustomProperty: "<SOME_CUSTOM_PROPERTY_VALUE>",
  },
});
```

### Webhooks

[Mantle endpoint API documentation](https://heymantle.com/docs/api/webhooks/)

[SDK Endpoint](./src/endpoints/webhooks/Webhooks.ts)

#### Validate Mantle webhook authenticity

```typescript
const { valid } = client.webhooks.validate({
  headers: "<REQUEST_HEADERS>",
  body: "<REQUEST_BODY>",
});
```

## Contributing

### Running the tests

To run the test you need:

- A [Shopify Partners] account
- A [Mantle] account

You will need to create a new Shopify development store.

You will need to create a new Shopify app.

You will need to configure [Mantle] with your development app credentials.

THen, you will need to create a `.env.test` file and populate it with the necessary data.
You can access the necessary data in [`.env.example`](./.env.example).

[Shopify Partners]: https://partners.shopify.com
[Mantle]: https://heymantle.com
[Mantle's API]: https://heymantle.com/docs/api
