const Products = require("../../models/product.model");
const uuid = require("uuid");

const createProduct = async (
  name,
  image,
  price,
  shortDescription,
  longDescription,
  quantity
) => {
  const sku = uuid.v4();

  try {
    return await Products.create({
      sku: sku,
      name: name,
      image: image,
      price: price,
      shortDescription: shortDescription,
      longDescription: longDescription,
      quantity: quantity,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

const findProductById = async (id) => {
  try {
    return await Products.findByPk(id);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const findAll = async () => {
  try {
    return await Products.findAll();
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createProduct,
  findProductById,
  findAll,
};
