import { BaseResource } from "./abstract";

export default class UserResource extends BaseResource {
  /**
   * Get a list of users.
   */
  list = this.spec("/user", "GET").build();

  /**
   * Get the specified user.
   */
  get = this.spec("/user/{id}", "GET").build();

  /**
   * Get the user associated with the current token.
   */
  me = this.spec("/user/me", "GET").build();
}
