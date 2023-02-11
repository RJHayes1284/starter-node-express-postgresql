const knew = require("../db/connection");

async function list(req, res, next) {
    const data = await productsService.list();
    res.json({ data });
  }

module.exports = {
    list,
}