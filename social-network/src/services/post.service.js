import { snClient } from "../config/db.config.js";

const findAll = async () => {
  const res = await snClient.query("SELECT * from post");
  return res.rows;
}

const findById = async (id) => {
  const res = await snClient.query(`SELECT * from post WHERE id = ${id}`);
  return res.rows[0];
}

const findByUserId = async (id) => {
  const res = await snClient.query(`SELECT * from post WHERE user_id = ${id}`);
  return res.rows;
}

export default {
  findAll,
  findById,
  findByUserId
};
