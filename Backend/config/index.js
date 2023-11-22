const { createPool } = require('mysql');
require('dotenv').config(); // Load environment variables from .env file

const dbConfig = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE,
	multipleStatements: true,
	connectionLimit: 30,
};

const pool = createPool(dbConfig);

// Handle connection errors
pool.getConnection((err, connection) => {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.error('Database connection was closed.');
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
			console.error('Database has too many connections.');
		}
		if (err.code === 'ECONNREFUSED') {
			console.error('Database connection was refused.');
		}
	}

	if (connection) {
		connection.release();
		console.log('Connected to MySQL Successfully');
	}

	return;
});

module.exports = pool;
