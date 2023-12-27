import { BaseResource } from "./abstract";

export default class FeedResource extends BaseResource {
  /**
   * Get the followed manga feed associated with the current token.
   */
  feed = this.spec("/user/follows/manga/feed", "GET").build();

  /**
   * Get the specified CustomList manga feed
   */
  customListFeed = this.spec("/list/{id}/feed", "GET").build();
}
