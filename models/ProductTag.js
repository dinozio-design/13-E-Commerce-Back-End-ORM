const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    prodTagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references:{
        model: "product",
        key: "prodId",
      },
    },
    tagId: {
      type: DataTypes.INTEGER,
      references:{
        model: "tag",
        key: "tagId",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ProductTag',
  }
);

module.exports = ProductTag;
