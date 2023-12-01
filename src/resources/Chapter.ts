import { BaseResource } from "./abstract";

export default class ChapterResource extends BaseResource {
  /**
   * Get a list of chapters.
   */
  list = this.request("/chapter", false, {});

  /**
   * Get the specified chapter.
   */
  get = this.request("/chapter/{id}", false, {});

  /**
   * Update the specified chapter.
   */
  update = this.request("/chapter/{id}", true, { method: "PUT" });

  /**
   * Delete the specified chapter.
   */
  delete = this.request("/chapter/{id}", false, { method: "DELETE" });
}
