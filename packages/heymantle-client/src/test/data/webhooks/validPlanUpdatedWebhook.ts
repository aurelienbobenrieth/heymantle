export const validPlanUpdatedWebhookHeaders = {
  "X-Timestamp": "1699809654",
  "X-Mantle-Webhook-Topic": "plans/update",
  "X-Mantle-Hmac-SHA256":
    "8492c85e78bb6936658721b206ceab2c957456521dc6cded42fc31564a23c6af",
};

export const validPlanUpdatedWebhookBody = {
  topic: "plans/update",
  id: "fe332c93-e2da-4c7e-8792-a0a08c448659",
  name: "Copy of Test Monthly Plan",
  amount: 50,
  currencyCode: "USD",
  public: true,
  trialDays: 0,
  interval: "EVERY_30_DAYS",
  createdAt: "2023-11-12 17:19:14",
  updatedAt: "2023-11-12 17:20:53",
  features: {
    limit_feature: {
      id: "a7bf0f2a-9068-4a04-9378-f4dd82caff75",
      name: "Limit Feature",
      type: "limit",
      description: "Test Limit Feature",
      value: null,
      displayOrder: 0,
    },
    boolean_feature: {
      id: "c1bf820e-5aae-4f8e-a015-ec301e109afa",
      name: "Boolean Feature",
      type: "boolean",
      description: "Test Boolean Feature",
      value: true,
      displayOrder: 0,
    },
    limit_with_overage_feature: {
      id: "d16b13c0-8b6c-4c1f-be3e-f5e7459b46e5",
      name: "Limit with overage Feature",
      type: "limit_with_overage",
      description: "Test Limit with overage Feature",
      value: "100",
      displayOrder: 0,
    },
  },
  featuresOrder: [
    "limit_feature",
    "boolean_feature",
    "limit_with_overage_feature",
  ],
  usageCharges: [
    {
      id: "7a35a144-677d-4aff-aa38-df72f3f9b440",
      amount: 50,
      type: "unit_limits",
      terms: null,
      cappedAmount: 1000,
      eventName: null,
    },
    {
      id: "37cc1cf9-08b9-4a70-93f4-5f1509a81a5a",
      amount: 100,
      type: "unit_limits",
      terms: null,
      cappedAmount: 1000,
      eventName: null,
    },
  ],
  customFields: {},
};
