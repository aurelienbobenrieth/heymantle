import { libConfig } from "#core/config/lib.config";

import { MantleClientProps, MantleRequestInput } from "./types";

export default class MantleClient {
  private appApiKey: string;
  private appId: string;
  private logger: unknown;

  public apiUrl: string;

  private constructor({
    appId,
    appApiKey,
    apiVersion = libConfig.public.mantle.apiVersions.v1,
    logger,
  }: MantleClientProps) {
    this.appId = appId;
    this.appApiKey = appApiKey;

    this.apiUrl = `${libConfig.public.mantle.apiRootUrl}/${apiVersion}`;

    this.logger = logger;
  }

  public static initializeWithApiKey({
    appId,
    appApiKey,
    apiVersion,
    logger,
  }: MantleClientProps) {
    if (typeof window !== "undefined") {
      throw new Error(
        "MantleClient.initWithApiKey should only be called from the server",
      );
    }

    return new MantleClient({ appId, appApiKey, apiVersion, logger });
  }

  private async authenticatedMantleRequest<TReturnType>({
    path,
    method = "GET",
    contentType = "application/json",
    body,
  }: MantleRequestInput): Promise<TReturnType> {
    const endpointUrl = `${this.apiUrl}${path}`;
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": contentType,
        Accept: "application/json",
        "X-Mantle-App-Id": this.appId,
        "X-Mantle-App-Api-Key": this.appApiKey,
      },
      body: body ? JSON.stringify(body) : undefined,
    };

    const response = await fetch(endpointUrl, options);
    const result = await response.json();

    return result;
  }
}
