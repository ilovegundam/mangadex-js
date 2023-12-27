import { BaseResource } from "./abstract";

export default class ForumsResource extends BaseResource {
  /**
   * Create a new thread in the MangaDex forums.
   * https://www.forums.mangadex.org/
   *
   * A thread is only created if it doesn't exist yet; otherwise the preexisting thread is returned.
   */
  createThread = this.spec("/forums/thread", "POST").build();
}
