import { BaseResource } from "./abstract";

export default class CoverResource extends BaseResource {
  /**
   * Get a list of covers.
   */
  list = this.spec("/cover", "GET").build();

  /**
   * Upload a new cover image to the specified manga or cover
   */
  upload = this.spec("/cover/{id}", "POST").build({
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  /**
   * Get the specified cover.
   */
  get = this.spec("/cover/{id}", "GET").build();

  /**
   * Update the specified cover.
   */
  update = this.spec("/cover/{id}", "PUT").build();

  /**
   * Delete the specified cover.
   */
  delete = this.spec("/cover/{id}", "DELETE").build();
}
