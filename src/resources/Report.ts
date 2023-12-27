import { BaseResource } from "./abstract";

export default class ReportResource extends BaseResource {
  /**
   * Get a list of report reasons by category.
   */
  list = this.spec("/report/reasons/{category}", "GET").build();

  /**
   * Get a list of reports created by the current token.
   */
  mine = this.spec("/report", "GET").build();

  /**
   * Create a new report.
   */
  create = this.spec("/report", "POST").build();
}
