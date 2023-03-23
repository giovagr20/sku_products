const express = require('express');
const routes = express.Router();
const productService = require('../../../domain/ports/services/products.service'); 


routes.get('/health-check', (req, res) => {
    res.send(
        {"server": "ok"}
    )
})

routes.post('/products', async (req, res) => {
    if (req.body === null) res.send({"Error": "Please send something information"});
    if (req.body === undefined) res.send({"Error": "Has occurred something"})

    console.log(req.body);
    const {
        name,
        image,
        price,
        shortDescription,
        longDescription,
        quantity
    } = req.body;

    const newProduct = await productService.createProduct(
        name,
        image,
        price,
        shortDescription,
        longDescription,
        quantity
    );

    res.json(newProduct);
})

routes.get("/products", async (req, res) => {
    const products = await productService.findAll();

    if (products == null) res.send({"message":"There are not products available to see"})

    res.send(products);
})

routes.get("/product/:id", async(req, res) => {
    const id = req.params.id

    if (id === null) res.send({message: "Error, please send id"})

    const product = await productService.findProductById(id);

    res.send(product);
})


module.exports = routes;