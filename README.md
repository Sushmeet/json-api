# Install
1. `node v10.14.1 and above`. npm should be also installed automatically along with node.
2. `mysql 8.0.15`

Once you have node and npm installed from the root of the project
```
npm install
```


# db Migrations
Ensure that a products database is already created.
Install knex globalls to handle database migrations.
```
npm i knex -g 

```

Now to execute migrations
```
knex migrate:latest
```
To rollback migrations
```
knex migrate:rollback

```


# start
Application runs on port 3000
```
npm start

```

# Test

To run end to end tests
``` 
npm test
```


### Get All Products 
Get all Products
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
Graceful Shutdown of application.

```
SIGINT Interrupt signal detected and exiting node process now.
Process is terminated
Process is terminated
^CSIGINT Interrupt signal detected and exiting node process now.
Terminated: 15
```






