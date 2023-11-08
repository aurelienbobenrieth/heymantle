import { ContentType, HttpMethod } from "#types/request.types";
import { UnknownJson } from "#types/utils.types";

export interface MantleClientProps {
  apiVersion?: string;
  appApiKey: string;
  appId: string;
  logger?: unknown;
}

export interface MantleRequestInput {
  body?: UnknownJson;
  headers?: Partial<AllowedHeaders>;
  method?: HttpMethod;
  url: string;
}

export interface AllowedHeaders {
  "X-Mantle-App-Id": string;
  "X-Mantle-App-Api-Key": string;
  "X-Mantle-Customer-Api-Token"?: string;
  "Content-Type"?: ContentType;
  Accept?: string;
}
