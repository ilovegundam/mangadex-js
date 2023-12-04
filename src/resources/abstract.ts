import { ArgumentsInPath, Prettify } from "../utility/types";
import { AxiosRequestConfig } from "axios";
import HttpClient from "../http";
import { merge } from "lodash";

export class BaseResource {
  constructor(protected http: HttpClient) {}

  protected request<
    R = any,
    Q = any,
    P extends string = string,
    D extends boolean = false,
    O = ArgumentsInPath<P>
  >(path: P, data: D, spec: AxiosRequestConfig & { supressError?: boolean }) {
    return async <T = R, S = Q>(
      ...args: [
        ...([keyof O] extends [never] ? [] : [path: Prettify<O>]),
        ...(D extends true ? [data: S] : []),
        params?: AxiosRequestConfig["params"],
        config?: AxiosRequestConfig
      ]
    ): Promise<T> => {
      spec.url = path;

      if ((path.match(/\{\w+\}/g) ?? []).length > 0) {
        for (const [key, value] of Object.entries(args.shift())) {
          spec.url = spec.url?.replace(`{${key}}`, String(value));
        }
      }

      if (data) {
        spec = merge(spec, { data: args.shift() });
      }

      const [params, config] = args;

      if (params) {
        spec = merge(spec, { params });
      }

      if (config) {
        spec = merge(spec, config);
      }

      return (await this.http.request(spec)).data;
    };
  }
}
