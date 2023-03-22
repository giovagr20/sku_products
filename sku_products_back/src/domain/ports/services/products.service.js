const Products = require('../../models/product.model');
const uuid = require('uuid');

const createProduct = async (name, image, price, shortDescription, longDescription, quantity) => {
    const sku = uuid.v4();
    return await Products.create({
        sku: sku,
        name: name,
        image: image,
        price: price,
        shortDescription: shortDescription,
        longDescription: longDescription,
        quantity: quantity
    });
}

const findProductById = async (id) => {
    return await Products.findByPk(id);
}

const findAll = async () => {
    return await Products.findAll();
}

module.exports = {
    createProduct,
    findProductById,
    findAll
};