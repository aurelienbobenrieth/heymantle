import { libConfig } from "#core/config/lib.config";

import { MantleClientProps } from "./types";

export default class MantleClient {
  private appId: string;
  private appApiKey: string;

  public apiUrl: string;
  private logger: unknown;

  constructor({
    appId,
    appApiKey,
    apiUrl = libConfig.public.mantle.apiUrl,
    logger,
  }: MantleClientProps) {
    this.appId = appId;
    this.appApiKey = appApiKey;
    this.apiUrl = apiUrl;
    this.logger = logger;
  }
}
