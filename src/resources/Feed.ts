import { BaseResource } from "./abstract";

export default class FeedResource extends BaseResource {
  /**
   * Get the followed manga feed associated with the current token.
   */
  feed = this.request("/user/follows/manga/feed", false, {});

  /**
   * Get the specified CustomList manga feed
   */
  customListFeed = this.request("/list/{id}/feed", false, {});
}
