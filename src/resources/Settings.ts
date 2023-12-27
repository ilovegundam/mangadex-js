import { BaseResource } from "./abstract";

export default class SettingsResource extends BaseResource {
  /**
   * Get the latest settings template.
   */
  latest = this.spec("/settings/template", "GET").build();

  /**
   * Create a new settings template.
   */
  create = this.spec("/settings/template", "POST").build();

  /**
   * Get the specified settings template by version id.
   */
  get = this.spec("/settings/template/{version}", "GET").build();

  /**
   * Get the settings associated with the current token.
   */
  me = this.spec("/settings", "GET").build();

  /**
   * Update the settings associated with the current token.
   */
  update = this.spec("/settings", "POST").build();
}
