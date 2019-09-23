const db = require("knex")(require("../db/knexfile"));
const uuid = require("uuid");

const insertProduct = ({ name, description, category, brand, tags } = {}) => {
  const id = uuid.v4();
  return db("products")
    .insert({
      id,
      name,
      description,
      category,
      brand,
      tags: JSON.stringify(tags)
    })
    .then(() => {
      return db("products")
        .select()
        .from("products")
        .where("id", id);
    });
};

const retrieveProducts = ({ category, limit = 3, offset = 0 } = {}) => {
  if (!category) {
    return _getallProducts(limit, offset);
  }

  return _getProductByCategory(category, limit, offset);
};

const _getallProducts = (limit, offset) => {
  return db("products")
    .select("*")
    .from("products")
    .limit(limit)
    .offset(offset)
    .orderBy("created_at", "desc");
};

const _getProductByCategory = (category, limit, offset) => {
  return db("products")
    .select("*")
    .from("products")
    .where("category", category)
    .limit(limit)
    .offset(offset)
    .orderBy("created_at", "desc");
};

module.exports = {
  insertProduct,
  retrieveProducts
};
