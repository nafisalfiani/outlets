# outlets
## Preparing the Database
To set the database, you can use `docker-compose` file provided on `env` directory. To start it up, start with terminal from repository root, then execute:

- `cd env`
- `docker-compose up`

Now that the database is up and running, we can begin migrating the tables.
## Migrating Tables
To migrate the tables, you need to install npm first:
- `npm install`

After the npm installation is finished, execute these:
- `npx sequelize db:create`
- `npx sequelize db:migrate`
## Starting the Application
After the tables are migrated, you can now start the application. Run:
- `cd server/outlet-service`
- `nodemon app.js`

After the application is running, you can access the GraphQL playground here: `http://localhost:4000/`
For the list of queries and mutations available, you can check the graphql docs. Or you can copy these:
```graphql
query GetBrands {
  getBrands {
    id
    name
    logo
    banner
    createdAt
    updatedAt
    Outlets {
      name
      picture
      address
      distance
    }
  }
}
```
```graphql
mutation CreateBrand($input: BrandInput!) {
  createBrand(input: $input) {
    id
    name
    logo
    banner
    createdAt
    updatedAt
  }
}
```
```json
{
  "input": {
    "name": "new-brands",
    "logo": "new-logo",
    "banner": "new-banner"
  }
}
```
```graphql
mutation UpdateBrand($input: BrandInput!) {
  updateBrand(input: $input) {
    id
    name
    logo
    banner
    createdAt
    updatedAt
  }
}
```
```json
{
  "input": {
    "id": "2",
    "name": "updated-brand",
    "logo": "updated-logo",
    "banner": "updated-banner"
  }
}
```
```graphql
mutation DeleteBrand($deleteBrandId: Int!) {
  deleteBrand(id: $deleteBrandId) {
    id
    name
    logo
    banner
    createdAt
    updatedAt
  }
}
```
```json
{
  "deleteBrandId": 2
}
```
```graphql
query GetOutlets {
  getOutlets {
    id
    name
    picture
    address
    longitude
    latitude
    distance
    createdAt
    updatedAt
  }
}
```
```graphql
mutation CreateOutlet($input: OutletInput!) {
  createOutlet(input: $input) {
    id
    name
    picture
    address
    longitude
    latitude
    createdAt
    updatedAt
    BrandId
  }
}
```
```json
{
  "input": {
    "name": "new-outlet",
    "address": "new-outlet-address",
    "picture": "new-outlet-picture",
    "latitude": "0.4232422423",
    "longitude": "-0.2422312",
    "BrandId": "1"
  }
}
```
```graphql
mutation UpdateOutlet($input: OutletInput!) {
  updateOutlet(input: $input) {
    id
    name
    picture
    address
    longitude
    latitude
    createdAt
    updatedAt
  }
}
```
```json
{
  "input": {
    "id": "2",
    "name": "updated-outlet",
    "picture": "updated-outlet-picture",
    "address": "updated-outlet-address",
    "latitude": "0.122523242",
    "longitude": "-0.5423533"
  }
}
```
```graphql
mutation DeleteOutlet($deleteOutletId: Int!) {
  deleteOutlet(id: $deleteOutletId) {
    id
    name
    picture
    address
    longitude
    latitude
    createdAt
    updatedAt
  }
}
```
```json
{
  "deleteOutletId": 2
}
```
```graphql
query GetProducts {
  getProducts {
    id
    name
    picture
    price
    createdAt
    updatedAt
  }
}
```
```graphql
mutation CreateProduct($input: ProductInput!) {
  createProduct(input: $input) {
    id
    name
    picture
    price
    createdAt
    updatedAt
    BrandId
  }
}
```
```json
{
  "input": {
    "name": "new-product",
    "picture": "new-product-picture",
    "price": 999999,
    "BrandId": "1" 
  }
}
```
```graphql
mutation UpdateProduct($input: ProductInput!) {
  updateProduct(input: $input) {
    id
    name
    picture
    price
    createdAt
    updatedAt
  }
}
```
```json
{
  "input": {
    "id": "2",
    "name": "Jam",
    "picture": "Gambar Jam",
    "price": 500000
  }
}
```
```graphql
mutation DeleteProduct($deleteProductId: Int!) {
  deleteProduct(id: $deleteProductId) {
    id
    name
    picture
    price
    createdAt
    updatedAt
  }
}
```
```json
{
  "deleteProductId": 2
}
```