const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project3",
};

const insertData = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const query = `INSERT INTO msgtable(msg) values (?)`;
  connection.queryAsync(query, [user.msg]);
  await connection.endAsync();
};

const selectAll = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const query = `select * from msgtable`;
  const list = connection.queryAsync(query, []);
  await connection.endAsync();
  return list;
};

module.exports = { insertData, selectAll };
