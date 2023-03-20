const productModel = require('../persistence/persistence.model')

const createProduct = async (productname, image, price, shortDescription, longDescription, quantity) => {

    const modelService = {
        name: productname,
        image: image,
        price: price,
        shortDescription: shortDescription,
        longDescription: longDescription,
        quantity: quantity
    }

    return await productModel.createProduct(modelService);
}

const findProductById = async (id) => {
    return await productModel.findProductById(id);
}

const findAll = async () => {
    return await productModel.findAll();
}

module.exports = {
    createProduct,
    findProductById,
    findAll
};