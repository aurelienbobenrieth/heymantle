import { Customer } from "#core/models/Customer";

import { MantleErrorResponse } from "../types";

export interface GetCustomerSuccessResponse {
  customer: Customer;
}

export interface GetCustomerErrorResponse extends MantleErrorResponse {}

export type GetCustomerResponse =
  | GetCustomerSuccessResponse
  | GetCustomerErrorResponse;
