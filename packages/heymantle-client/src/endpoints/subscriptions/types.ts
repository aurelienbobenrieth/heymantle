import { Subscription } from "#core/models/Subscription";
import { UnknownJson } from "#types/utils.types";

import { MantleErrorResponse } from "../types";

export interface SubscriptionsCreateInput extends UnknownJson {
  // plan id
  planId: string;
  // URL to redirect the customer to after subscription is complete
  returnUrl: string;
}

export interface SubscriptionsCreateSuccessResponse extends Subscription {}

export interface SubscriptionsCreateErrorResponse extends MantleErrorResponse {}

export type SubscriptionsCreateResponse =
  | SubscriptionsCreateSuccessResponse
  | SubscriptionsCreateErrorResponse;

export interface SubscriptionsCancelSuccessResponse {}

export interface SubscriptionsCancelErrorResponse extends MantleErrorResponse {}

export type SubscriptionsCancelResponse =
  | SubscriptionsCancelSuccessResponse
  | SubscriptionsCancelErrorResponse;

export type SubscriptionsUpdateInput = Partial<Subscription>;

export interface SubscriptionsUpdateSuccessResponse {}

export interface SubscriptionsUpdateErrorResponse extends MantleErrorResponse {}

export type SubscriptionsUpdateResponse =
  | SubscriptionsUpdateSuccessResponse
  | SubscriptionsUpdateErrorResponse;
