Install 
node v10.14.1 and above. This should install npm package manager for you as well.


db Migrations
Ensure that a products database is already created

npm i knex -g (install knex globally)

Now to execute migrations
knex migrate:latest



Test
Get All Products 
```
curl --request GET \
  --url http://localhost:3000/v1/products
 ```
 Create a Product
 ```
 curl --request POST \
  --url http://localhost:3000/v1/products \
  --header 'content-type: application/json' \
  --data '{
"name": "Red Shirt55",
"description": "Red hugo boss shirt555",
"brand": "Hugo Boss",
"tags": [
	"red",
	"shirt",
	"slim fit"],
"category": "apparel"
}'
 ```
  



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

