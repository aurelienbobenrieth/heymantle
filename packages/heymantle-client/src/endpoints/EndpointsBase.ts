import { UnknownJson } from "#types/utils.types";

import MantleClient from "../MantleClient";
import { AllowedBuildHeaders } from "../types";

interface GetRequestInput {
  headers?: Partial<AllowedBuildHeaders>;
  url: string;
}

interface PostRequestInput<TBody> {
  body?: TBody;
  headers?: Partial<AllowedBuildHeaders>;
  url: string;
}

export default class EndpointsBase {
  constructor(protected client: MantleClient) {}

  protected async deleteRequest<TReturnType, TBody extends UnknownJson>({
    url,
    body,
    headers,
  }: PostRequestInput<TBody>): Promise<TReturnType> {
    return await this.client.makeRequest<TReturnType>({
      method: "DELETE",
      url,
      body,
      headers,
    });
  }

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

  protected async putRequest<TReturnType, TBody extends UnknownJson>({
    url,
    body,
    headers,
  }: PostRequestInput<TBody>): Promise<TReturnType> {
    return await this.client.makeRequest<TReturnType>({
      method: "PUT",
      url,
      body,
      headers,
    });
  }
}
