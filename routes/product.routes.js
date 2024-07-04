const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

//get products
router.get("/", getProducts);

//get product by id
router.get(":id", getProduct);

//create product
router.post("/", createProduct);

//update product
router.put("/:id", updateProduct);

//delete product
router.delete("/:id", deleteProduct);
