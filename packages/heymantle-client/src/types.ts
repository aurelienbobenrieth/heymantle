import { HttpMethod } from "#server/types/request.types";
import { UnknownJson, WithLeadingSlashString } from "#server/types/utils.types";

export interface MantleClientProps {
  appId: string;
  appApiKey: string;
  apiUrl?: string;
  logger?: any;
}

export interface MantleRequestInput<T = UnknownJson> {
  path: WithLeadingSlashString;
  method?: HttpMethod;
  body?: T;
}
