const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'postgres://user:password@localhost:5432/test_products',
  {
    dialect: "postgres",
  });

const Products = sequelize.define("Products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  shortDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  longDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
  tableName: 'Products',
  freezeTableName: true
});

sequelize.sync()
  .then(() => {
    console.log('Table created successfully.');
  })
  .catch((error) => {
    console.log('Error creating table:', error);
  });

module.exports = Products;