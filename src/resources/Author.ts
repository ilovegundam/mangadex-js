import { BaseResource } from "./abstract";

export default class AuthorResource extends BaseResource {
  /**
   * Get a list of authors.
   */
  list = this.request("/author", false, {});

  /**
   * Create a new author.
   */
  create = this.request("/author", true, { method: "POST" });

  /**
   * Get the specified author.
   */
  get = this.request("/author/{id}", false, {});

  /**
   * Update the specified author.
   */
  update = this.request("/author/{id}", true, { method: "PUT" });

  /**
   * Delete the specified author.
   */
  delete = this.request("/author/{id}", false, { method: "DELETE" });
}
