import { routesV1 } from "#core/config/routes.config";

import EndpointsBase from "../EndpointsBase";
import { CustomerGetResonse } from "./types";

export default class CustomerEndpoint extends EndpointsBase {
  public async get(customerApiToken: string): Promise<CustomerGetResonse> {
    return await this.getRequest<CustomerGetResonse>({
      url: routesV1.api.customer,
      headers: {
        "X-Mantle-Customer-Api-Token": customerApiToken,
      },
    });
  }
}
