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
  return await Product.apply({
    name,
    image,
    price,
    shortDescription,
    longDescription,
    quantity,
  });
};

const findProductById = async (id) => {
  await sequelize.sync({ force: true });
  return await Product.findByPk(id);
};

const findAll = async () => {
    sequelize.sync({force: true});
  return await Product.findAll();
};

module.exports = {
  findProductById,
  createProduct,
  findAll
};
