/* eslint-disable no-unused-vars */
const  Promise = require('promise');
const { Pool } = require('pg');
require('dotenv').config();

// this initializes a connection pool
// it will keep idle connections open for 30 seconds
// and set a limit of maximum 10 idle clients
const pool = new Pool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

// export the query method for passing queries to the pool
const query = (text, values, callback) => pool.query(text, values, callback);

const getTesting = () =>
  new Promise((resolve, reject) => {
    query('SELECT * FROM data.testing', null, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });

exports.getTesting = getTesting;
