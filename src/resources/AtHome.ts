import { BaseResource } from "./abstract";

export default class AtHomeResource extends BaseResource {
  /**
   * Get image server details for the specified chapter.
   */
  getImageServerDetails = this.request("/at-home/server/{chapter}", false, {});
}
