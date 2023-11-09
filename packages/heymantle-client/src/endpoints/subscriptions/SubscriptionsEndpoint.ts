import { routesV1 } from "#core/config/routes.config";

import EndpointsBase from "../EndpointsBase";
import { SubscriptionsCreateInput, SubscriptionsCreateResponse } from "./types";

export default class SubscriptionsEndpoint extends EndpointsBase {
  public async create(
    customerApiToken: string,
    { planId, returnUrl }: SubscriptionsCreateInput,
  ): Promise<SubscriptionsCreateResponse> {
    return await this.postRequest<
      SubscriptionsCreateResponse,
      SubscriptionsCreateInput
    >({
      url: routesV1.api.subscriptions,
      headers: {
        "X-Mantle-Customer-Api-Token": customerApiToken,
      },
      body: {
        planId,
        returnUrl,
      },
    });
  }
}
