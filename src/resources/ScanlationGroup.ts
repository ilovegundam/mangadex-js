import { BaseResource } from "./abstract";

export default class ScanlationGroupResource extends BaseResource {
  /**
   * Get a list of scanlation groups.
   */
  list = this.request("/group", false, {});

  /**
   * Create a new scanlation group.
   */
  create = this.request("/group", true, { method: "POST" });

  /**
   * Get a specific scanlation group.
   */
  get = this.request("/group/{id}", false, {});

  /**
   * Update the specified scanlation group.
   */
  update = this.request("/group/{id}", true, { method: "PUT" });

  /**
   * Delete the specified scanlation group.
   */
  delete = this.request("/group/{id}", false, { method: "DELETE" });

  /**
   * Follow the specified scanlation group.
   */
  follow = this.request("/group/{id}/follow", false, { method: "POST" });

  /**
   * Unfollow the specified scanlation group.
   */
  unfollow = this.request("/group/{id}/follow", false, { method: "DELETE" });
}
