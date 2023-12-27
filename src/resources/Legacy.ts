import { BaseResource } from "./abstract";

export default class LegacyResource extends BaseResource {
  /**
   * Get a mapping of legacy ids to new uuids
   *
   * the `data.attributes.newId` field corresponds to the new uuid.
   */
  mapLegacyIDs = this.spec("/legacy/mapping", "POST").build();
}
