import { BaseResource } from "./abstract";

export default class AuthorResource extends BaseResource {
  /**
   * Get a list of authors.
   */
  list = this.spec("/author", "GET").build();

  /**
   * Create a new author.
   */
  create = this.spec("/author", "POST").build();

  /**
   * Get the specified author.
   */
  get = this.spec("/author/{id}", "GET").build();

  /**
   * Update the specified author.
   */
  update = this.spec("/author/{id}", "PUT").build();

  /**
   * Delete the specified author.
   */
  delete = this.spec("/author/{id}", "DELETE").build();
}
