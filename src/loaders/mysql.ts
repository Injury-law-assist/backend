import mysql from 'mysql2/promise';
export default async (): Promise<mysql.Pool> => {
    /** config opt 넣기 */
    const pool = mysql.createPool({});
    return pool;
};
