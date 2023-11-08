import { UnknownJson } from "#types/utils.types";

import MantleClient from "../MantleClient";

interface GetRequestInput {
  headers?: HeadersInit;
  url: string;
}

interface PostRequestInput<TBody> {
  body?: TBody;
  headers?: HeadersInit;
  url: string;
}

export default class EndpointsBase {
  constructor(protected client: MantleClient) {}

  protected async getRequest<TReturnType>({
    url,
    headers,
  }: GetRequestInput): Promise<TReturnType> {
    return await this.client.makeRequest<TReturnType>({
      method: "GET",
      url,
      headers,
    });
  }

  protected async postRequest<TReturnType, TBody extends UnknownJson>({
    url,
    body,
    headers,
  }: PostRequestInput<TBody>): Promise<TReturnType> {
    return await this.client.makeRequest<TReturnType>({
      method: "POST",
      url,
      body,
      headers,
    });
  }
}
