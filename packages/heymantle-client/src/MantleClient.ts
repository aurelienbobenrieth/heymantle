import { libConfig } from "#core/config/lib.config";

import CustomerEndpoint from "./endpoints/customer/CustomerEndpoint";
import IdentifyEndpoint from "./endpoints/identify/IdentifyEndpoint";
import SubscriptionsEndpoint from "./endpoints/subscriptions/SubscriptionsEndpoint";
import UsageEventsEndpoint from "./endpoints/usage-events/UsageEvents";
import {
  AllowedBuildHeaders,
  MantleClientProps,
  MantleRequestInput,
} from "./types";
import Webhooks from "./webhooks/Webhooks";

export default class MantleClient {
  private appApiKey: string;
  private appId: string;
  private logger: unknown;

  public apiUrl: string;
  public customer: CustomerEndpoint;
  public identify: IdentifyEndpoint;
  public subscriptions: SubscriptionsEndpoint;
  public usageEvents: UsageEventsEndpoint;
  public webhooks: Webhooks;

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

    this.customer = new CustomerEndpoint(this);
    this.identify = new IdentifyEndpoint(this);
    this.subscriptions = new SubscriptionsEndpoint(this);
    this.usageEvents = new UsageEventsEndpoint(this);

    this.webhooks = new Webhooks(this);
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

  public getAppApiKey(): string {
    return this.appApiKey;
  }

  public async makeRequest<TReturnType>({
    url,
    method = "GET",
    headers,
    body,
  }: MantleRequestInput): Promise<TReturnType> {
    const endpointUrl = `${this.apiUrl}${url}`;
    const options: RequestInit = {
      method,
      headers: this.buildHeaders(headers),
      body: body ? JSON.stringify(body) : undefined,
    };

    const response = await fetch(endpointUrl, options);
    const result = await response.json();

    return result;
  }

  private buildHeaders(
    inputHeaders?: Partial<AllowedBuildHeaders>,
  ): Partial<AllowedBuildHeaders> {
    const headers: Partial<AllowedBuildHeaders> = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Mantle-App-Id": this.appId,
    };

    if (inputHeaders && inputHeaders["X-Mantle-Customer-Api-Token"])
      headers["X-Mantle-Customer-Api-Token"] =
        inputHeaders["X-Mantle-Customer-Api-Token"];
    else headers["X-Mantle-App-Api-Key"] = this.appApiKey;

    return headers;
  }
}
