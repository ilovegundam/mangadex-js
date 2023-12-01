import { describe, test, expect } from "vitest";
import MangaDex from "../src";

describe("HttpClient", () => {
  const mangadex = new MangaDex();

  test("should correctly set the Authorization header", () => {
    mangadex.setAccessToken("<MY_TOKEN>");
    expect(mangadex.http.axios.defaults.headers.common.Authorization).toEqual("Bearer <MY_TOKEN>");
  });

  test("should only return the Authorization headers value", () => {
    const token = mangadex.getAccessToken();
    expect(token).toEqual("<MY_TOKEN>");
  });
});
