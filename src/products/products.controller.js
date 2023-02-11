const productsService = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function list(req, res, next) {
  productsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}

async function productExists(req, res, next) {
  const product = await productsService.read(req.param.productId);
  if (product) {
    res.locals.product = product;
    return next()
  }
  next({ status: 404, message: `Product cannot be found.` })
}

module.exports = {
  read: [asyncErrorBoundary(productExists), read],
  list: asyncErrorBoundary(list),
};