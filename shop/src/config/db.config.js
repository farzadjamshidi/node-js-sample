import "dotenv/config";
import pg from "pg";

const { Client } = pg;

const shopClient = new Client({
  PGUSER: process.env.SHOP_PGUSER,
  PGHOST: process.env.SHOP_PGHOST,
  PGPASSWORD: process.env.SHOP_PGPASSWORD,
  database: process.env.SHOP_PGDATABASE,
  port: process.env.SHOP_PGPORT
});
await shopClient.connect();

export { shopClient };