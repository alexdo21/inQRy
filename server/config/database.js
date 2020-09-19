const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  multipleStatements: true,
});

pool.getConnection((err, conn) => {
  if (err) console.log(err);
  conn.release();
});

module.exports = pool;
