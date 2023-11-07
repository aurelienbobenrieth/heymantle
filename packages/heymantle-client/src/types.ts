import { ContentType, HttpMethod } from "#types/request.types";
import { UnknownJson, WithLeadingSlashString } from "#types/utils.types";

export interface MantleClientProps {
  appId: string;
  appApiKey: string;
  apiVersion?: string;
  logger?: unknown;
}

export interface MantleRequestInput {
  path: WithLeadingSlashString;
  method?: HttpMethod;
  contentType?: ContentType;
  body?: UnknownJson;
}
