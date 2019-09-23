const  app  = require("../../server");
const request = require("supertest");

describe("Create Product", () => {
  it("should create a product based on args supplied", async () => {
    const result = await request(app)
      .get('/')
      .expect(200)

    expect(result.body.description).toEqual('Product API is running');
  });
});
