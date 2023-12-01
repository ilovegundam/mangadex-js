import { describe, expect, test } from "vitest";
import HttpClient from "../src/http";

describe("HttpClient", () => {
  test("should merge options with defaults", () => {
    const http = new HttpClient({
      baseURL: "https://example.com",
      headers: {
        "User-Agent": "mangadex-js/tests",
        "Content-Encoding": "gzip",
      },
    });

    expect(http.options).toEqual({
      baseURL: "https://example.com",
      headers: {
        "User-Agent": "mangadex-js/tests",
        "Content-Encoding": "gzip",
        "Content-Type": "application/json",
      },
    });
  });
});
