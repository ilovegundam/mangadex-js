import { BaseResource } from "./abstract";

export default class CoverResource extends BaseResource {
  /**
   * Get a list of covers.
   */
  list = this.request("/cover", false, {});

  /**
   * Upload a new cover image to the specified manga or cover
   */
  upload = this.request("/cover/{id}", true, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  /**
   * Get the specified cover.
   */
  get = this.request("/cover/{id}", false, {});

  /**
   * Update the specified cover.
   */
  update = this.request("/cover/{id}", true, { method: "PUT" });

  /**
   * Delete the specified cover.
   */
  delete = this.request("/cover/{id}", false, { method: "DELETE" });
}
