import { BaseResource } from "./abstract";

export default class FollowsResource extends BaseResource {
  /**
   * Get a list of groups followed by the current token.
   */
  groups = this.spec("/user/follows/group", "GET").build();

  /**
   * Get a list of users followed by the current token.
   */
  users = this.spec("/user/follows/user", "GET").build();

  /**
   * Get a list of manga followed by the current token.
   */
  mangas = this.spec("/user/follows/manga", "GET").build();

  /**
   * Get a list of custom lists followed by the current token.
   */
  lists = this.spec("/user/follows/list", "GET").build();

  /**
   * Check if the current token follows the specified group.
   */
  group = this.spec("/user/follows/group/{id}", "GET").build({
    validateStatus: (status) => (status >= 200 && status < 300) || status === 404,
  });

  /**
   * Check if the current token follows the specified user.
   */
  user = this.spec("/user/follows/user/{id}", "GET").build({
    validateStatus: (status) => (status >= 200 && status < 300) || status === 404,
  });

  /**
   * Check if the current token follows the specified manga.
   */
  manga = this.spec("/user/follows/manga/{id}", "GET").build({
    validateStatus: (status) => (status >= 200 && status < 300) || status === 404,
  });

  /**
   * Check if the current token follows the specified custom list.
   */
  list = this.spec("/user/follows/list/{id}", "GET").build({
    validateStatus: (status) => (status >= 200 && status < 300) || status === 404,
  });
}
