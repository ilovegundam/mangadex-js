import { BaseResource } from "./abstract";

export default class MangaResource extends BaseResource {
  /**
   * Get a list of manga.
   */
  list = this.request("/manga", false, {});

  /**
   * Create a new manga.
   */
  create = this.request("/manga", true, { method: "POST" });

  /**
   * Get the volumes and chapters of the specified manga.
   */
  volumes = this.request("/manga/{id}/aggregate", false, {});

  /**
   * Get a manga.
   */
  get = this.request("/manga/{id}", false, {});

  /**
   * Update a manga.
   */
  update = this.request("/manga/{id}", true, { method: "PUT" });

  /**
   * Delete a manga.
   */
  delete = this.request("/manga/{id}", false, { method: "DELETE" });

  /**
   * Unfollow a manga.
   */
  unfollow = this.request("/manga/{id}/follow", false, { method: "DELETE" });

  /**
   * Follow a manga.
   */
  follow = this.request("/manga/{id}/follow", false, { method: "POST" });

  /**
   * Get a manga feed.
   */
  feed = this.request("/manga/{id}/feed", false, {});

  /**
   * Get a random manga.
   */
  random = this.request("/manga/random", false, {});

  /**
   * Get a list of manga tags.
   */
  tags = this.request("/manga/tag", false, {});

  /**
   * Get the current tokens reading statuses
   */
  statuses = this.request("/manga/status", false, {});

  /**
   * Get the reading status for the specified manga.
   */
  status = this.request("/manga/{id}/status", false, {});

  /**
   * Update the reading status for the specified manga.
   */
  updateStatus = this.request("/manga/{id}/status", true, { method: "POST" });

  /**
   * Get a manga draft.
   */
  getDraft = this.request("/manga/draft/{id}", false, {});

  /**
   * Submit a manga draft.
   */
  submitDraft = this.request("/manga/draft/{id}/commit", true, {
    method: "POST",
  });

  /**
   * Get a list of manga drafts.
   */
  drafts = this.request("/manga/draft", false, {});

  /**
   * Get a list of manga relations.
   */
  relations = this.request("/manga/{id}/relation", false, {});

  /**
   * Create a new manga relation.
   */
  createRelation = this.request("/manga/{id}/relation", true, {
    method: "POST",
  });

  /**
   * Delete a manga relation.
   */
  deleteRelation = this.request("/manga/{manga}/relation/{id}", false, {
    method: "DELETE",
  });
}
