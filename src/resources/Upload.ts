import { BaseResource } from "./abstract";

export default class UploadResource extends BaseResource {
  /**
   * Get the current upload session associated with the current token.
   */
  current = this.request("/upload", false, {});

  /**
   * Start an upload session.
   */
  start = this.request("/upload/begin", true, { method: "POST" });

  /**
   * Start an edit chapter session.
   */
  edit = this.request("/upload/begin/{id}", true, { method: "POST" });

  /**
   * Upload images to the specified upload session.
   */
  upload = this.request("/upload/{id}", true, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  /**
   * Abandon the specified upload session.
   */
  abandon = this.request("/upload/{id}", false, { method: "DELETE" });

  /**
   * Commit the specified upload session.
   */
  commit = this.request("/upload/{id}/commit", true, { method: "POST" });

  /**
   * Delete the specified image from an upload session.
   */
  delete = this.request("/upload/{session}/{file}", false, { method: "DELETE" });

  /**
   * Delete a batch of images from the specified upload session.
   */
  deleteBatch = this.request("/upload/{id}/batch", true, { method: "DELETE" });
}
