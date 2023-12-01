import { BaseResource } from "./abstract";

export default class ReadMarkerResource extends BaseResource {
  /**
   * Get a list of chapter ids marked as read for the specified manga.
   */
  readMarker = this.request("/manga/{id}/read", true, {});

  /**
   * Get a list of chapter ids marked as read for a list of manga.
   */
  readMarkers = this.request("/manga/read", true, {});

  /**
   * Mark chapter ids as read and/or unread for a manga.
   */
  batch = this.request("/manga/{id}/read", true, { method: "POST" });

  /**
   * Get the read history associated with the current token.
   */
  history = this.request("/user/history", false, {});
}
