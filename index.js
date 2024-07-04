// console.log("Hello world!");

const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

// app.get('/', (req, res) => {
//     res.send("Hello from API.");
// });

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find(req.body);
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/products", async (req, res) => {
//   // console.log(req.body);
//   // res.send(req.body)
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get('/api/products/:id', async (req,res) => {
//   try {

//     const {id} = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);

//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
// })

//Update Product
// app.put('/api/products/:id', async (req,res) => {
//   try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndUpdate(id,req.body);

//     if(!product){
//       return res.status(404).json({message: "Product Not Found!"})
//     }

//     const updatedProduct = await Product.findById(id)
//     res.status(200).json(updatedProduct)

//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
// })

//Delete Product
// app.delete('/api/products/:id', async (req,res) => {
//   try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndDelete(id)
//     if(!product){
//       return res.status(404).json({message: "Product Not Found!"})
//     }
//     res.status(200).json({message: "Product deleted successfully!"})
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Database Connected!");
    app.listen(3000, () => {
      console.log("Sever is running on port 3000");
    });
  })
  .catch(() => console.log("Connection faild!"));
