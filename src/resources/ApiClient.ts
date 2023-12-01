import { BaseResource } from "./abstract";

export default class ApiClientResource extends BaseResource {
  /**
   * Get a list of api clients created by the current token.
   */
  list = this.request("/client", false, {});

  /**
   * Create a new api client.
   */
  create = this.request("/client", true, { method: "POST" });

  /**
   * Get the specified api client.
   */
  get = this.request("/client/{id}", false, {});

  /**
   * Update the specified api client.
   */
  update = this.request("/client/{id}", true, { method: "POST" });

  /**
   * Delete the specified api client.
   */
  delete = this.request("/client/{id}", false, { method: "DELETE" });

  /**
   * Get the specified api client's secret.
   */
  getSecret = this.request("/client/{id}/secret", false, {});

  /**
   * Regenerate the specified api client's secret.
   */
  regenerateSecret = this.request("/client/{id}/secret", true, {
    method: "POST",
  });
}
