import { BaseResource } from "./abstract";

export default class StatisticsResource extends BaseResource {
  /**
   * Get statistics about the specified chapter.
   */
  chapter = this.spec("/statistics/chapter/{id}", "GET").build();

  /**
   * Get statistics about the specified chapters.
   */
  chapters = this.spec("/statistics/chapter", "GET").build();

  /**
   * Get statistics about the specified scanlation group.
   */
  scanlationGroup = this.spec("/statistics/group/{id}", "GET").build();

  /**
   * Get statistics about the specified scanlation groups.
   */
  scanlationGroups = this.spec("/statistics/group", "GET").build();

  /**
   * Get statistics about the specified manga.
   */
  manga = this.spec("/statistics/manga/{id}", "GET").build();

  /**
   * Get statistics about the specified mangas.
   */
  mangas = this.spec("/statistics/manga", "GET").build();
}
