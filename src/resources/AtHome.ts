import { BaseResource } from "./abstract";

export default class AtHomeResource extends BaseResource {
  /**
   * Get image server details for the specified chapter.
   */
  getImageServerDetails = this.spec("/at-home/server/{chapter}", "GET").build();
}
