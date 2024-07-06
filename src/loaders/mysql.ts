import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
export default async (): Promise<mysql.Pool> => {
    /** config opt 넣기 */
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || '10', 10),
        queueLimit: 0,
    });
    return pool;
};
