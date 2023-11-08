import EndpointsBase from "../EndpointsBase";
import { GetCustomerResponse } from "./types";

export default class CustomerEndpoint extends EndpointsBase {
  public async get(customerApiToken: string): Promise<GetCustomerResponse> {
    return await this.getRequest<GetCustomerResponse>({
      url: "/customer",
      headers: {
        "X-Mantle-Customer-Api-Token": customerApiToken,
      },
    });
  }
}
