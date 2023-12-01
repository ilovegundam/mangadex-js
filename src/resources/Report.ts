import { BaseResource } from "./abstract";

export default class ReportResource extends BaseResource {
  /**
   * Get a list of report reasons by category.
   */
  list = this.request("/report/reasons/{category}", false, {});

  /**
   * Get a list of reports created by the current token.
   */
  mine = this.request("/report", false, {});

  /**
   * Create a new report.
   */
  create = this.request("/report", true, { method: "POST" });
}
