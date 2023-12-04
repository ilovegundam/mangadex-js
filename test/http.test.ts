import HttpClient from "../src/http";

describe("HttpClient", () => {
  it("should merge options with defaults", () => {
    const client = new HttpClient({
      params: { includes: ["author", "manga", "cover_art"] },
      headers: { "User-Agent": "mangadex-js/test" },
    });

    expect(client.options).toEqual({
      baseURL: "https://api.mangadex.org/",
      params: { includes: ["author", "manga", "cover_art"] },
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "mangadex-js/test",
      },
    });
  });
});
