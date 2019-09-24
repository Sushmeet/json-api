const { insertProduct, retrieveProducts } = require("../providers/products");

function getProducts(req, res, err) {
  const args = {
    category: req.query.category,
    limit: Number(req.query.limit) || 30,
    offset: Number(req.query.offset) || 0
  };

  retrieveProducts(args)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function createProduct(req, res, err) {
  const args = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    brand: req.body.brand,
    tags: req.body.tags
  };

  insertProduct(args)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = {
  getProducts,
  createProduct
};
