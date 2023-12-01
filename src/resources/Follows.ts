import { BaseResource } from "./abstract";

export default class FollowsResource extends BaseResource {
  /**
   * Get a list of groups followed by the current token.
   */
  groups = this.request("/user/follows/group", false, {});

  /**
   * Get a list of users followed by the current token.
   */
  users = this.request("/user/follows/user", false, {});

  /**
   * Get a list of manga followed by the current token.
   */
  mangas = this.request("/user/follows/manga", false, {});

  /**
   * Get a list of custom lists followed by the current token.
   */
  lists = this.request("/user/follows/list", false, {});

  /**
   * Check if the current token follows the specified group.
   */
  group = this.request("/user/follows/group/{id}", false, {
    supressError: true,
  });

  /**
   * Check if the current token follows the specified user.
   */
  user = this.request("/user/follows/user/{id}", false, {
    supressError: true,
  });

  /**
   * Check if the current token follows the specified manga.
   */
  manga = this.request("/user/follows/manga/{id}", false, {
    supressError: true,
  });

  /**
   * Check if the current token follows the specified custom list.
   */
  list = this.request("/user/follows/list/{id}", false, {
    supressError: true,
  });
}
