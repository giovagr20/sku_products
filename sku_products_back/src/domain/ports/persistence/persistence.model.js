const Product = require("../../models/product.model");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://user:password@localhost:5432/test_products",
  {
    dialect: "postgres",
  }
);

const createProduct = async ({
  name,
  image,
  price,
  shortDescription,
  longDescription,
  quantity,
}) => {
  try {
    return await Product.apply({
      name,
      image,
      price,
      shortDescription,
      longDescription,
      quantity,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

const findProductById = async (id) => {
  try {
    await sequelize.sync({ force: true });
    return await Product.findByPk(id);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const findAll = async () => {
  try {
    sequelize.sync({ force: true });
    return await Product.findAll();
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  findProductById,
  createProduct,
  findAll,
};
