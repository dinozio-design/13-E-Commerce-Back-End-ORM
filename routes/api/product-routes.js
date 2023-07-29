const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: Category,
        },
        //   {
        //     model: Tag,
        //   },
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Category,
        },
        {
          model: Tag,
        },
      ],
    });
    if (!productData) {
      res.status(404).json({ message: "No product found with that ID!" });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// create new product
router.post('/', (req, res) => {

  /* req.body should look like this...
    {
      prodName: "Basketball",
      price: 200.00,
      stock: 3,
      categoryId: 1,
      tagIds: [1, 2, 3, 4]
    }
  */
  //  console.log('i mhere',req);
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tagId) => {
          return {
            productId: product.id,
            tagId,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        ProductTag.findAll({
          where: { productId: req.params.id }
        }).then((productTags) => {
          // create filtered list of new tagIds
          const productTagIds = productTags.map(({ tagId }) => tagId);
          const newProductTags = req.body.tagIds
            .filter((tagId) => !productTagIds.includes(tagId))
            .map((tagId) => {
              return {
                productId: req.params.id,
                tagId,
              };
            });

          // figure out which ones to remove
          const productTagsToRemove = productTags
            .filter(({ tagId }) => !req.body.tagIds.includes(tagId))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const deletedProduct = await Product.destroy({
      where: {
        prodId: req.params.id,
      },
    });
    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
