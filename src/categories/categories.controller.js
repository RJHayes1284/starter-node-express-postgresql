const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res) {
  try {
 const data = await categoriesService.list();
 res.json({ data })}
 catch (error) {
  next(error)
 }
}

module.exports = {
  list: asyncErrorBoundary(list),
};