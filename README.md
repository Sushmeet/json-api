Product API
Use Knex migrations to create a user database schema.
npm i knex -g
knex migrate:make create_products_table
knex migrate:latest
knex migrate:rollback

// to create the database
CREATE SCHEMA `products` ;

// to drop the database 
DROP DATABASE `products`;



WHERE Location = 'US'
    OR Location IS NULL


search product by category...
knex.select('*').from('users').limit(10).offset(30)
Outputs:
select * from `users` limit 10 offset 30

