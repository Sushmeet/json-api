const app = require("../../app");
const request = require("supertest");
const db = require("knex")(require('../../knexfile'));

describe("Create Product", () => {
  beforeAll(() => {
    return db("products").del();
  });
  
  afterAll(() => {
    return db("products").del();
  });
  it("should ensure application is up and running", async () => {
    const result = await request(app)
      .get("/")
      .expect(200);

    expect(result.body.description).toEqual("Product API is running");
  });

  it("should create a new product", async () => {
    const product = {
      name: "Red Shirt",
      description: "Red hugo boss shirt",
      category: "apparel",
      brand: "Hugo Boss",
      "tags": [
        "red",
        "shirt",
        "slim fit"
      ],
    };
    const expectedResult = [
      {
        "name": "Red Shirt",
        "description": "Red hugo boss shirt",
        "category": "apparel",
        "brand": "Hugo Boss",
        "tags": [
          "red",
          "shirt",
          "slim fit"
        ],
      }
    ];

    const result = await request(app)
      .post("/v1/products")
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

      expect(result.body).toMatchObject(expectedResult);
  
  });
});
