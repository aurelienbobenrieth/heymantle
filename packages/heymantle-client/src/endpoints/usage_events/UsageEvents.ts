import { routesV1 } from "#core/config/routes.config";
import "#core/libs/env/dotenv.lib";

import EndpointsBase from "../EndpointsBase";
import {
  UsageEventsSendInput,
  UsageEventsSendInputMantleCasing,
  UsageEventsSendResponse,
} from "./types";

export default class UsageEventsEndpoint extends EndpointsBase {
  public async send(
    customerApiToken: string,
    { eventName, eventId, properties }: UsageEventsSendInput,
  ): Promise<UsageEventsSendResponse> {
    return await this.postRequest<
      UsageEventsSendResponse,
      UsageEventsSendInputMantleCasing
    >({
      url: routesV1.api.usageEvents,
      headers: {
        "X-Mantle-Customer-Api-Token": customerApiToken,
      },
      body: {
        event_name: eventName,
        event_id: eventId,
        properties,
      },
    });
  }
}
