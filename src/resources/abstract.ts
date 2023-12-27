import { ArgumentsInPath, Prettify } from "../utility/types";
import { HttpMethod, DataMathod } from "../types/http";
import { Axios, AxiosRequestConfig } from "axios";
import HttpClient from "../http";
import merge from "lodash/merge";

export class BaseResource {
  constructor(protected http: HttpClient) {}

  protected spec<E extends string, M extends HttpMethod, _AIP = ArgumentsInPath<E>>(
    endpoint: E,
    method: M
  ) {
    return {
      build: <X = any, Y = any>(req: AxiosRequestConfig = {}) => {
        return async <T = X, D = Y>(
          ...args: [
            ...([keyof _AIP] extends [never] ? [] : [path: Prettify<_AIP>]),
            ...(M extends DataMathod ? [data: D] : []),
            params?: AxiosRequestConfig["params"],
            config?: AxiosRequestConfig
          ]
        ): Promise<T> => {
          req.url = endpoint;
          req.method = method;

          if ((endpoint.match(/\{\w+\}/g) ?? []).length > 0) {
            for (const [key, value] of Object.entries(args.shift())) {
              req.url = req.url?.replace(`{${key}}`, String(value));
            }
          }

          if (method === "POST" || method === "PUT" || method === "PATCH") {
            req.data = args.shift();
          }

          const [params, config] = args;

          if (params) {
            req = merge(req, { params });
          }

          if (config) {
            req = merge(req, config);
          }

          return (await this.http.request<T>(req)).data;
        };
      },
    };
  }
}
