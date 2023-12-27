import { BaseResource } from "./abstract";

export default class MangaResource extends BaseResource {
  /**
   * Get a list of manga.
   */
  list = this.spec("/manga", "GET").build();

  /**
   * Create a new manga.
   */
  create = this.spec("/manga", "POST").build();

  /**
   * Get the volumes and chapters of the specified manga.
   */
  volumes = this.spec("/manga/{id}/aggregate", "GET").build();

  /**
   * Get a manga.
   */
  get = this.spec("/manga/{id}", "GET").build();

  /**
   * Update a manga.
   */
  update = this.spec("/manga/{id}", "PUT").build();

  /**
   * Delete a manga.
   */
  delete = this.spec("/manga/{id}", "DELETE").build();

  /**
   * Unfollow a manga.
   */
  unfollow = this.spec("/manga/{id}/follow", "DELETE").build();

  /**
   * Follow a manga.
   */
  follow = this.spec("/manga/{id}/follow", "POST").build();

  /**
   * Get a manga feed.
   */
  feed = this.spec("/manga/{id}/feed", "GET").build();

  /**
   * Get a random manga.
   */
  random = this.spec("/manga/random", "GET").build();

  /**
   * Get a list of manga tags.
   */
  tags = this.spec("/manga/tag", "GET").build();

  /**
   * Get the current tokens reading statuses
   */
  statuses = this.spec("/manga/status", "GET").build();

  /**
   * Get the reading status for the specified manga.
   */
  status = this.spec("/manga/{id}/status", "GET").build();

  /**
   * Update the reading status for the specified manga.
   */
  updateStatus = this.spec("/manga/{id}/status", "POST").build();

  /**
   * Get a manga draft.
   */
  getDraft = this.spec("/manga/draft/{id}", "GET").build();

  /**
   * Submit a manga draft.
   */
  submitDraft = this.spec("/manga/draft/{id}/commit", "POST").build();

  /**
   * Get a list of manga drafts.
   */
  drafts = this.spec("/manga/draft", "GET").build();

  /**
   * Get a list of manga relations.
   */
  relations = this.spec("/manga/{id}/relation", "GET").build();

  /**
   * Create a new manga relation.
   */
  createRelation = this.spec("/manga/{id}/relation", "POST").build();

  /**
   * Delete a manga relation.
   */
  deleteRelation = this.spec("/manga/{manga}/relation/{id}", "DELETE").build();
}
