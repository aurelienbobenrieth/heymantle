import { UnknownJson } from "#types/utils.types";

import { MantleErrorResponse, MantleSuccessResponse } from "../types";

export interface UsageEventsSendInput extends UnknownJson {
  eventId?: string;
  eventName: string;
  properties?: UnknownJson;
}

export interface UsageEventsSendInputMantleCasing extends UnknownJson {
  event_id?: string;
  event_name: string;
  properties?: UnknownJson;
}

export interface UsageEventsSendErrorResponse extends MantleErrorResponse {}

export interface UsageEventsSendSuccessResponse extends MantleSuccessResponse {}

export type UsageEventsSendResponse =
  | UsageEventsSendErrorResponse
  | UsageEventsSendSuccessResponse;
