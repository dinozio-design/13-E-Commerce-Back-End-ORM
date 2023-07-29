const { Category } = require('../models');

const categoryData = [
  {
    catName: 'Shirts',
  },
  {
    catName: 'Shorts',
  },
  {
    catName: 'Music',
  },
  {
    catName: 'Hats',
  },
  {
    catName: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
