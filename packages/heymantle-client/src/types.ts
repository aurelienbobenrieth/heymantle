import { HttpMethod } from "#types/request.types";
import { UnknownJson, WithLeadingSlashString } from "#types/utils.types";

export interface MantleClientProps {
  appId: string;
  appApiKey: string;
  apiUrl?: string;
  logger?: unknown;
}

export interface MantleRequestInput<T = UnknownJson> {
  path: WithLeadingSlashString;
  method?: HttpMethod;
  body?: T;
}
