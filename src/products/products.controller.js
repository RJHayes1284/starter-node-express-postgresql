const productsService = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
const data = await productsService.list();
res.json({ data })
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

async function listOutOfStockCount(req, res, next) {
  res.json({ data: await productsService.listOutOfStockCount() });
}

async function listPriceSummary(req, res, next) {
  res.json({ data: await productsService.listPriceSummary() });
}

async function listTotalWeightByProduct(rew, res) {
  res.json({ data: await productsService.listTotalWeightByProduct() })
}

module.exports = {
  read: [asyncErrorBoundary(productExists), read],
  list: asyncErrorBoundary(list), 
  listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount), 
  listPriceSummary: asyncErrorBoundary(listPriceSummary),
  listTotalWeightByProduct: asyncErrorBoundary(listTotalWeightByProduct),
};