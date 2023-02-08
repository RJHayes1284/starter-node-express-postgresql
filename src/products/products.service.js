const knew = require("../db/connection");

function list() {
    return knex("products").select("*");
}

module.exports = {
    list,
}