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
  headers?: Partial<AllowedBuildHeaders>;
  method?: HttpMethod;
  url: string;
}

export interface MantleHeaders {
  "X-Mantle-App-Id"?: string;
  "X-Mantle-App-Api-Key"?: string;
  "X-Mantle-Customer-Api-Token"?: string;
  "X-Mantle-Hmac-SHA256"?: string;
  "X-Mantle-Webhook-Topic"?: string;
}

export interface AllowedBuildHeaders
  extends Partial<
    Pick<
      MantleHeaders,
      "X-Mantle-App-Id" | "X-Mantle-App-Api-Key" | "X-Mantle-Customer-Api-Token"
    >
  > {
  "Content-Type"?: ContentType;
  Accept?: string;
}
