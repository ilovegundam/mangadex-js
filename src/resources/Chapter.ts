import { BaseResource } from "./abstract";

export default class ChapterResource extends BaseResource {
  /**
   * Get a list of chapters.
   */
  list = this.spec("/chapter", "GET").build();

  /**
   * Get the specified chapter.
   */
  get = this.spec("/chapter/{id}", "GET").build();

  /**
   * Update the specified chapter.
   */
  update = this.spec("/chapter/{id}", "PUT").build();

  /**
   * Delete the specified chapter.
   */
  delete = this.spec("/chapter/{id}", "DELETE").build();
}
