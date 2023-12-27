import { BaseResource } from "./abstract";

export default class ReadMarkerResource extends BaseResource {
  /**
   * Get a list of chapter ids marked as read for the specified manga.
   */
  readMarker = this.spec("/manga/{id}/read", "GET").build();

  /**
   * Get a list of chapter ids marked as read for a list of manga.
   */
  readMarkers = this.spec("/manga/read", "GET").build();

  /**
   * Mark chapter ids as read and/or unread for a manga.
   */
  batch = this.spec("/manga/{id}/read", "POST").build();

  /**
   * Get the read history associated with the current token.
   */
  history = this.spec("/user/history", "GET").build();
}
