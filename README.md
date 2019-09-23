# Install
`node v10.14.1 and above`. This should install npm package manager for you as well.
The database being used is `mysql 8.0.15`
Once you have node and npm installed from the root of the project
```
npm install
```


# db Migrations
Ensure that a products database is already created. This application does not ensure that.
```
CREATE SCHEMA `products` ;
```
npm i knex -g (install knex globally)

Now to execute migrations
knex migrate:latest


# Test
### Get All Products 
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

Get a product by category and with pagination supported by limit and offset
```
curl --request GET \
  --url 'http://localhost:3000/v1/products?category=apparel&limit=5&offset=2'
 ```



# Known Bugs
knex migrate:rollback (is not working.)





