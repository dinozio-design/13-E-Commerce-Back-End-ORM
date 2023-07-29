// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
   foreignKey: "categoryId",
   onUpdate: "",
   onDelete: "SET NULL",
});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey: "categoryId",
  onDelete: "NO ACTION",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: "productTag",
  as:"tags",
  foreignKey: "productId",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: "productTag",
  as:"products",
  foreignKey: "tagId",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
