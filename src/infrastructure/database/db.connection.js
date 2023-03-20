const { Pool } = require('pg');
const {user, password, host, port, database} = require('../utils/properties');

// creates a new pool of connections to the database
const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: port,
});

// test connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(`Connected to ${result.rows[0].now}`)
  })
});

module.exports = pool;