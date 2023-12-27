import { BaseResource } from "./abstract";

export default class CustomListResource extends BaseResource {
  /**
   * Create a new custom list.
   */
  create = this.spec("/list", "POST").build();

  /**
   * Get the specified custom list.
   */
  get = this.spec("/list/{id}", "GET").build();

  /**
   * Update the specified custom list.
   */
  update = this.spec("/list/{id}", "PUT").build();

  /**
   * Delete the specified custom list.
   */
  delete = this.spec("/list/{id}", "DELETE").build();

  /**
   * Follow the specified custom list.
   */
  follow = this.spec("/list/{id}/follow", "POST").build();

  /**
   * Unfollow the specified custom list.
   */
  unfollow = this.spec("/list/{id}/follow", "DELETE").build();

  /**
   * Add the specified manga to the specified custom list.
   */
  add = this.spec("/manga/{manga}/list/{list}", "POST").build();

  /**
   * Remove the specified manga from the specified custom list.
   */
  remove = this.spec("/manga/{manga}/list/{list}", "DELETE").build();

  /**
   * Get a list of private and public custom lists created by the current token.
   */
  list = this.spec("/user/list", "GET").build();

  /**
   * Get a list of public custom lists created by the specified user.
   */
  public = this.spec("/user/{id}/list", "GET").build();
}
