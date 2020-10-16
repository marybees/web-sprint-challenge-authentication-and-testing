const db = require("../database/db-config");

module.exports = {
  add,
  find,
  findById,
  isValid,
};

function find() {
  return db("users").select("id", "username").orderBy("id");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}
