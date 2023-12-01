import { BaseResource } from "./abstract";

export default class StatisticsResource extends BaseResource {
  /**
   * Get statistics about the specified chapter.
   */
  chapter = this.request("/statistics/chapter/{id}", false, {});

  /**
   * Get statistics about the specified chapters.
   */
  chapters = this.request("/statistics/chapter", false, {});

  /**
   * Get statistics about the specified scanlation group.
   */
  scanlationGroup = this.request("/statistics/group/{id}", false, {});

  /**
   * Get statistics about the specified scanlation groups.
   */
  scanlationGroups = this.request("/statistics/group", false, {});

  /**
   * Get statistics about the specified manga.
   */
  manga = this.request("/statistics/manga/{id}", false, {});

  /**
   * Get statistics about the specified mangas.
   */
  mangas = this.request("/statistics/manga", false, {});
}
