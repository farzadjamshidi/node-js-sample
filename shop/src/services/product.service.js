import { shopClient } from "../config/db.config.js";

const findAll = async () => {
  const res = await shopClient.query("SELECT * from product");
  return res.rows;
}

const findById = async (id) => {
  const res = await shopClient.query(`SELECT * from product WHERE id = ${id}`);
  return res.rows[0];
}

export default {
  findAll,
  findById
};
