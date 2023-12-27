import { BaseResource } from "./abstract";

export default class InfrastructureResource extends BaseResource {
  /**
   * Returns a plaintext response containing only the word "pong" if the API is healthy
   */
  ping = this.spec("/ping", "GET").build<string>();
}
