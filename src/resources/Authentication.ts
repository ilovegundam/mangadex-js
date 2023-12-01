import { BaseResource } from "./abstract";

export default class AuthenticationResource extends BaseResource {
  /**
   * Get the permissions associated with the current token.
   */
  permissions = this.request("/auth/check", false, {});
}
