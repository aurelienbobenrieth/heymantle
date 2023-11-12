import { routesV1 } from "#core/config/routes.config";
import "#core/libs/env/dotenv.lib";

import EndpointsBase from "../EndpointsBase";
import { IdentifyCustomerInput, IdentifyCustomerResponse } from "./types";

export default class IdentifyEndpoint extends EndpointsBase {
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
