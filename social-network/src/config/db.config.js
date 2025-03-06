import "dotenv/config";
import pg from "pg";

const { Client } = pg;

const snClient = new Client({
  PGUSER: process.env.SN_PGUSER,
  PGHOST: process.env.SN_PGHOST,
  PGPASSWORD: process.env.SN_PGPASSWORD,
  database: process.env.SN_PGDATABASE,
  port: process.env.SN_PGPORT
});
await snClient.connect();

export { snClient };