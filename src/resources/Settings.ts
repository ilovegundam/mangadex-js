import { BaseResource } from "./abstract";

export default class SettingsResource extends BaseResource {
  /**
   * Get the latest settings template.
   */
  latest = this.request("/settings/template", false, {});

  /**
   * Create a new settings template.
   */
  create = this.request("/settings/template", true, { method: "POST" });

  /**
   * Get the specified settings template by version id.
   */
  get = this.request("/settings/template/{version}", false, {});

  /**
   * Get the settings associated with the current token.
   */
  me = this.request("/settings", false, {});

  /**
   * Update the settings associated with the current token.
   */
  update = this.request("/settings", true, { method: "POST" });
}
