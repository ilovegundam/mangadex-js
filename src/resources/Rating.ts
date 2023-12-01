import { BaseResource } from "./abstract";

export default class RatingResource extends BaseResource {
  /**
   * Get a list of ratings created by the current token.
   */
  list = this.request("/rating", false, {});

  /**
   * Create a new rating.
   */
  create = this.request("/rating/{manga}", true, { method: "POST" });

  /**
   * Delete the specified rating.
   */
  delete = this.request("/rating/{manga}", false, { method: "DELETE" });
}
