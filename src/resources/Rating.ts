import { BaseResource } from "./abstract";

export default class RatingResource extends BaseResource {
  /**
   * Get a list of ratings created by the current token.
   */
  list = this.spec("/rating", "GET").build();

  /**
   * Create a new rating.
   */
  create = this.spec("/rating/{manga}", "POST").build();

  /**
   * Delete the specified rating.
   */
  delete = this.spec("/rating/{manga}", "DELETE").build();
}
