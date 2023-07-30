const { ProductTag } = require('../models');

const productTagData = [
  {
    prodId: 1,
    tagId: 6,
  },
  {
    prodId: 1,
    tagId: 7,
  },
  {
    prodId: 1,
    tagId: 8,
  },
  {
    prodId: 2,
    tagId: 6,
  },
  {
    prodId: 3,
    tagId: 1,
  },
  {
    prodId: 3,
    tagId: 3,
  },
  {
    prodId: 3,
    tagId: 4,
  },
  {
    prodId: 3,
    tagId: 5,
  },
  {
    prodId: 4,
    tagId: 1,
  },
  {
    prodId: 4,
    tagId: 2,
  },
  {
    prodId: 4,
    tagId: 8,
  },
  {
    prodId: 5,
    tagId: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
