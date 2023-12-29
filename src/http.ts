import merge from "lodash/merge";
import axios, {
  CreateAxiosDefaults,
  AxiosInstance,
  AxiosRequestConfig,
  isAxiosError,
  AxiosResponse,
} from "axios";

export type HttpClientOptions = Omit<CreateAxiosDefaults, "auth"> & {};

export const httpClientDefaults: HttpClientOptions = {
  baseURL: "https://api.mangadex.org/",
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "mangadex-js",
  },
};

export default class HttpClient {
  options: HttpClientOptions;
  axios: AxiosInstance;

  constructor(options?: HttpClientOptions) {
    this.options = merge(httpClientDefaults, options);
    this.axios = axios.create(this.options);
  }

  async request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      return await this.axios.request<T>(config);
    } catch (e) {
      throw isAxiosError(e) ? `${e.message}\n${JSON.stringify(e.response?.data, null, 2)}` : e;
    }
  }
}
