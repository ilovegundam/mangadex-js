import { BaseResource } from "./abstract";

export default class CustomListResource extends BaseResource {
  /**
   * Create a new custom list.
   */
  create = this.request("/list", true, { method: "POST" });

  /**
   * Get the specified custom list.
   */
  get = this.request("/list/{id}", false, {});

  /**
   * Update the specified custom list.
   */
  update = this.request("/list/{id}", true, { method: "PUT" });

  /**
   * Delete the specified custom list.
   */
  delete = this.request("/list/{id}", false, { method: "DELETE" });

  /**
   * Follow the specified custom list.
   */
  follow = this.request("/list/{id}/follow", false, { method: "POST" });

  /**
   * Unfollow the specified custom list.
   */
  unfollow = this.request("/list/{id}/follow", false, { method: "DELETE" });

  /**
   * Add the specified manga to the specified custom list.
   */
  add = this.request("/manga/{manga}/list/{list}", false, { method: "POST" });

  /**
   * Remove the specified manga from the specified custom list.
   */
  remove = this.request("/manga/{manga}/list/{list}", false, {
    method: "DELETE",
  });

  /**
   * Get a list of private and public custom lists created by the current token.
   */
  list = this.request("/user/list", false, {});

  /**
   * Get a list of public custom lists created by the specified user.
   */
  public = this.request("/user/{id}/list", false, {});
}
