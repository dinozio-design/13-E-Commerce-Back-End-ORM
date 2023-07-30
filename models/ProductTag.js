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
        key: "prod_id",
      },
    },
    tagId: {
      type: DataTypes.INTEGER,
      references:{
        model: "tag",
        key: "tag_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productTag',
  }
);

module.exports = ProductTag;
