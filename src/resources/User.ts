import { BaseResource } from "./abstract";

export default class UserResource extends BaseResource {
  /**
   * Get a list of users.
   */
  list = this.request("/user", false, {});

  /**
   * Get the specified user.
   */
  get = this.request("/user/{id}", false, {});

  /**
   * Get the user associated with the current token.
   */
  me = this.request("/user/me", false, {});
}
