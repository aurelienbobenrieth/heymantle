import { Customer } from "#core/models/Customer";

import { MantleErrorResponse } from "../types";

export interface CustomerGetSuccessResponse {
  customer: Customer;
}

export interface CustomerGetErrorResponse extends MantleErrorResponse {}

export type CustomerGetResonse =
  | CustomerGetSuccessResponse
  | CustomerGetErrorResponse;
