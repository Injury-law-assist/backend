import mysql from 'mysql2/promise';
import { Inject, Service } from 'typedi';
import { UserJoinRequestDTO } from '../dto/request/user';

/**
 * CHECKLIST - AuthRepository
 *  [ ] login 기능 구현
 *  [x] find 함수 따로 만들어서 구현
 *  [x] join 기능 구현
 *  [x] insert 함수로 구현
 */
@Service()
export default class UserRepository {
    constructor(@Inject('pool') private readonly pool: mysql.Pool) {}
    private async executeQuery(query: string, values: any[] = []): Promise<any> {
        let connection: mysql.PoolConnection | null = null;
        try {
            connection = await this.pool.getConnection();
            const [result, fields] = await connection.query(query, values);
            return result;
        } catch (error) {
            console.error(`Error executing query: ${query}`, error);
            throw error;
        } finally {
            if (connection) connection.release();
        }
    }

    findOneByPk = async ({ email }: { email: string }) => {
        const query = 'SELECT * FROM users WHERE u_email = ? limit 1';
        return ((await this.executeQuery(query, [email])) as any)[0];
    };
    create = async (user: UserJoinRequestDTO) => {
        const query = 'INSERT INTO users(u_email, u_password, u_nickname) values (?,?,?)';
        try {
            return await this.executeQuery(query, Object.values(user));
        } catch (err) {
            throw err;
        }
    };
}
