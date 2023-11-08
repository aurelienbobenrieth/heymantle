import { testConfig } from "#test/config/test.config";

import MantleClient from "../MantleClient";

export function buildWithApiKeyClientInstance(): MantleClient {
  const mantleAppId = testConfig.private.mantle.appId;
  const mantleAppApiKey = testConfig.private.mantle.appApiKey;

  if (!mantleAppId)
    throw new Error(
      "No Mantle App ID provided. Please provide a valid Mantle App ID in your .env.test file as MANTLE_APP_ID.",
    );

  if (!mantleAppApiKey)
    throw new Error(
      "No Mantle App API key provided. Please provide a valid Mantle App API key in your .env.test file as MANTLE_APP_API_KEY.",
    );

  return MantleClient.withApiKey({
    appId: mantleAppId,
    appApiKey: mantleAppApiKey,
  });
}
