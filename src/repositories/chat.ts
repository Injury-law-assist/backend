import mysql from 'mysql2/promise';
import { Inject, Service } from 'typedi';

@Service()
export default class ChatRepository {
    private readonly pool: mysql.Pool;

    constructor(@Inject('pool') pool: mysql.Pool) {
        this.pool = pool;
    }

    private async executeQuery(query: string, values: any[] = []) {
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

    async getMessages({ r_id }: { r_id: number }) {
        const query = 'SELECT * FROM messages WHERE cr_id = ?';
        return await this.executeQuery(query, [r_id]);
    }

    async getChatRooms({ u_id }: { u_id: number }) {
        const query = 'SELECT * FROM chatRooms WHERE u_id = ?';
        return await this.executeQuery(query, [u_id]);
    }

    async generateChatRoom({ u_id }: { u_id: number }) {
        const query = 'INSERT INTO chatRooms (title, u_id) VALUES (?, ?)';
        try {
            await this.executeQuery(query, ['챗봇', u_id]);
            return 'success';
        } catch (error) {
            console.error(`Error generating chat room: ${error}`);
            throw error;
        }
    }

    async deleteChatRoom({ r_id }: { r_id: number }) {
        const query = 'DELETE FROM chatRooms WHERE cr_id = ?';
        try {
            await this.executeQuery(query, [r_id]);
            return 'success';
        } catch (error) {
            console.error(`Error deleting chat room: ${error}`);
            throw error;
        }
    }
}
