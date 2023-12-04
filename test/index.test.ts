import MangaDex from "../src/index";

describe("MangaDex", () => {
  const client = new MangaDex();

  it("should correctly set the access token", () => {
    client.setAccessToken("<MY_TOKEN>");
    expect(client.http.axios.defaults.headers.common.Authorization).toEqual("Bearer <MY_TOKEN>");
  });

  it("should correctly retrieve the access token", () => {
    const token = client.getAccessToken();
    expect(token).toEqual("<MY_TOKEN>");
  });
});
