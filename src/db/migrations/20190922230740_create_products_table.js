exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", table => {
    table.uuid("id").primary();
    table.string("name").notNull();
    table.string("description").notNull();
    table.string("category").notNull();
    table.string("brand").nullable();
    table.json("tags").notNull();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("products");
};
