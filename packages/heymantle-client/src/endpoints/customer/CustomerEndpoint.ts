// import { Customer } from "src/types";

// import EndpointsBase from "../EndpointsBase";

// interface GetCustomerResponse {
//   customer: Customer;
// }

// export default class CustomerEndpoint extends EndpointsBase {
//   public async get(customerApiToken: string): Promise<GetCustomerResponse> {
//     const headers = this.buildHeaders({
//       mantleCustomerApiToken: customerApiToken,
//     });

//     return await this.getRequest<GetCustomerResponse>({
//       url: "/customer",
//       headers,
//     });
//   }
// }
