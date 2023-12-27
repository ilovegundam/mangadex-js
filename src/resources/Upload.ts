import { BaseResource } from "./abstract";

export default class UploadResource extends BaseResource {
  /**
   * Get the current upload session associated with the current token.
   */
  current = this.spec("/upload", "GET").build();

  /**
   * Start an upload session.
   */
  start = this.spec("/upload/begin", "POST").build();

  /**
   * Start an edit chapter session.
   */
  edit = this.spec("/upload/begin/{id}", "POST").build();

  /**
   * Upload images to the specified upload session.
   */
  upload = this.spec("/upload/{id}", "POST").build({
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  /**
   * Abandon the specified upload session.
   */
  abandon = this.spec("/upload/{id}", "DELETE").build();

  /**
   * Commit the specified upload session.
   */
  commit = this.spec("/upload/{id}/commit", "POST").build();

  /**
   * Delete the specified image from an upload session.
   */
  delete = this.spec("/upload/{session}/{file}", "DELETE").build();

  /**
   * Delete a batch of images from the specified upload session.
   */
  deleteBatch = this.spec("/upload/{id}/batch", "DELETE").build();
}
