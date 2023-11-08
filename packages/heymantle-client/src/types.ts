import { HttpMethod } from "#types/request.types";
import { UnknownJson } from "#types/utils.types";

export interface MantleClientProps {
  apiVersion?: string;
  appApiKey: string;
  appId: string;
  logger?: unknown;
}

export interface MantleRequestInput {
  body?: UnknownJson;
  headers?: HeadersInit;
  method?: HttpMethod;
  url: string;
}

export interface Customer {}
