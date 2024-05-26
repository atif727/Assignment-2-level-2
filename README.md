# Public live link of this server
> https://ecommerce-website-by-atif.vercel.app/

## This is a server for a shop that sells keyboard
> **IT HAS PRODUCTS OF BASICALLY KEYBOARDS ONLY**
---
# How to run the server?

# **There are total 9 methods and functionalities.**

## 1. Creating a new product || Using `POST` method:
   * use `< serverlink >/api/products` and use **PostMan** or any other calling software to while maintaining the required product model/structure in [KB.sample.json](https://github.com/AtifBatch5/Assignment-2-level-2/blob/main/KB.sample.json) create a product in the database.

## 2. Getting All products || Using `GET` method:
   * use `< serverlink >/api/products` and use **PostMan** or any other calling software to get all the products in the database.
  
## 3. Retrieve a Specific Product by ID || Using `GET` method:
   * use `< serverlink >/api/products/:productId` and use **PostMan** or any other calling software to get a specific product using `_id` of a product from the database.
   * do remember to use the `_id`
  
## 4. Update Product Information || Using `PUT` method:
   * use `< serverlink >/api/products/:productId` and use **PostMan** or any other calling software to update a product in the database.
   * do remember to follow the keyboard json model/structure from [KB.sample.json](https://github.com/AtifBatch5/Assignment-2-level-2/blob/main/KB.sample.json) while updating
   * do remember to use the `_id`.
    
## 5. Delete Product Information || Using `DELETE` method:
   * use `< serverlink >/api/products/:productId` and use **PostMan** or any other calling software to delete a product in the database.
   * do remember to use the `_id`.
  
## 6. Search a product || Using `GET` method:
   * use `< serverlink >/api/products?searchTerm=lunatic` and use **PostMan** or any other calling software to search a product in the database.
   * Unfortunately you can only search up the name :(
   * **NOTE:** it will give all the products that have the same keyword as the query.
  
## 7. Creating a new order || Using `POST` method:
   * use `< serverlink >/api/orders` and use **PostMan** or any other calling software to while maintaining the required product model/structure in [order.sample.json](https://github.com/AtifBatch5/Assignment-2-level-2/blob/main/order.sample.json) create an order in the database.

## 8. Retrieve All Orders || Using `GET` method:
   * use `< serverlink >/api/orders` and use **PostMan** or any other calling software to get all the orders performed in the database.

## 9. Retrieve Orders by User Email || Using `GET` methods:
   * use `< serverlink >/api/orders?email=`  and use **PostMan** or any other calling software to get specific orders according to the email in the database.
