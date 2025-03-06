import { snClient } from "../config/db.config.js";
import fs from 'fs';

// Read the SQL file
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Use the relative path to the social-network.pgsql file
const sqlFilePath = path.join(__dirname, 'social-network.pgsql');

// Read the SQL file
const sqlFile = fs.readFileSync(sqlFilePath, 'utf-8');

(async () => {
  try {
    // Run the SQL commands from the file
    const result = await snClient.query(sqlFile);
    console.log('SQL commands executed successfully:', result);

  } catch (err) {
    console.error('Error executing SQL commands:', err);
  } finally {
    // Close the connection
    await snClient.end();
  }
})();