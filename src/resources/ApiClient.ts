import { BaseResource } from "./abstract";

export default class ApiClientResource extends BaseResource {
  /**
   * Get a list of api clients created by the current token.
   */
  list = this.spec("/client", "GET").build();

  /**
   * Create a new api client.
   */
  create = this.spec("/client", "POST").build();

  /**
   * Get the specified api client.
   */
  get = this.spec("/client/{id}", "GET").build();

  /**
   * Update the specified api client.
   */
  update = this.spec("/client/{id}", "POST").build();

  /**
   * Delete the specified api client.
   */
  delete = this.spec("/client/{id}", "DELETE").build();

  /**
   * Get the specified api client's secret.
   */
  getSecret = this.spec("/client/{id}/secret", "GET").build();

  /**
   * Regenerate the specified api client's secret.
   */
  regenerateSecret = this.spec("/client/{id}/secret", "POST").build();
}
