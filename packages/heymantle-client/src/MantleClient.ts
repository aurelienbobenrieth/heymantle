import { libConfig } from "#core/config/lib.config";

import IdentifyEndpoint from "./endpoints/identify/IdentifyEndpoint";
import { MantleClientProps, MantleRequestInput } from "./types";

export default class MantleClient {
  private appApiKey: string;
  private appId: string;
  private logger: unknown;

  public apiUrl: string;
  public identify: IdentifyEndpoint;

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

    this.identify = new IdentifyEndpoint(this);
  }

  public static withApiKey({
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

  // public buildHeaders({
  //   contentType,
  //   mantleAppId,
  //   mantleAppApiKey,
  //   mantleCustomerApiToken
  // }: ): HeadersInit | undefined {
  //   return {};
  // }
  public async makeRequest<TReturnType>({
    url,
    method = "GET",
    headers,
    body,
  }: MantleRequestInput): Promise<TReturnType> {
    const endpointUrl = `${this.apiUrl}${url}`;
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Mantle-App-Id": this.appId,
        "X-Mantle-App-Api-Key": this.appApiKey,
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    };

    const response = await fetch(endpointUrl, options);
    const result = await response.json();

    return result;
  }
}
