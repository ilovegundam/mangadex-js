import { BaseResource } from "./abstract";

export default class ScanlationGroupResource extends BaseResource {
  /**
   * Get a list of scanlation groups.
   */
  list = this.spec("/group", "GET").build();

  /**
   * Create a new scanlation group.
   */
  create = this.spec("/group", "POST").build();

  /**
   * Get a specific scanlation group.
   */
  get = this.spec("/group/{id}", "GET").build();

  /**
   * Update the specified scanlation group.
   */
  update = this.spec("/group/{id}", "PUT").build();

  /**
   * Delete the specified scanlation group.
   */
  delete = this.spec("/group/{id}", "DELETE").build();

  /**
   * Follow the specified scanlation group.
   */
  follow = this.spec("/group/{id}/follow", "POST").build();

  /**
   * Unfollow the specified scanlation group.
   */
  unfollow = this.spec("/group/{id}/follow", "DELETE").build();
}
