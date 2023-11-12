import { routesV1 } from "#core/config/routes.config";

import EndpointsBase from "../EndpointsBase";
import {
  SubscriptionsCancelResponse,
  SubscriptionsCreateInput,
  SubscriptionsCreateResponse,
  SubscriptionsUpdateInput,
  SubscriptionsUpdateResponse,
} from "./types";

export default class SubscriptionsEndpoint extends EndpointsBase {
  public async cancel(
    customerApiToken: string,
  ): Promise<SubscriptionsCancelResponse> {
    try {
      return await this.deleteRequest<
        SubscriptionsCreateResponse,
        SubscriptionsCreateInput
      >({
        url: routesV1.api.subscriptions,
        headers: {
          "X-Mantle-Customer-Api-Token": customerApiToken,
        },
      });
    } catch (e) {
      const NO_ACTIVE_SUBSCRIPTION_ERROR = {
        error: "No active subscription found.",
      };

      return NO_ACTIVE_SUBSCRIPTION_ERROR;
    }
  }

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

  public async update(
    customerApiToken: string,
    subscription: SubscriptionsUpdateInput,
  ): Promise<SubscriptionsUpdateResponse> {
    try {
      return await this.putRequest<
        SubscriptionsUpdateResponse,
        SubscriptionsUpdateInput
      >({
        url: routesV1.api.subscriptions,
        headers: {
          "X-Mantle-Customer-Api-Token": customerApiToken,
        },
        body: subscription,
      });
    } catch (e) {
      const UNVALID_CONFIG_PROVIDED_ERROR = {
        error: "Provided subscription config is not valid.",
      };

      return UNVALID_CONFIG_PROVIDED_ERROR;
    }
  }
}
