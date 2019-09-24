const app = require("../../app");
const request = require("supertest");
const db = require("knex")(require("../../knexfile"));

describe("getProducts", () => {
  beforeAll(() => {
    return db("products").del();
  });

  afterAll(() => {
    return db("products").del();
  });

  it("should return an empty array when there are no products", async() => {
    const result = await request(app)
    .get('/v1/products')
    .expect(200);

  expect(result.body).toEqual([]);
  });
});
