import { Inject, Service } from 'typedi';
import Repository from '.';
import mysql from 'mysql2/promise';
import { MessageDTO } from '../dto/response/chat';
import connection from '../configs/db';

// TODO: 페이지네이션 적용하기
@Service()
export default class MessageRepository extends Repository {
    private last_m_id: number;
    private limit: number;

    constructor(@Inject('pool') pool: mysql.Pool) {
        super(pool);

        this.last_m_id = 0;
        this.limit = 0;
    }

    public setMessageParams({ last_m_id, limit }: { last_m_id: number; limit: number }) {
        this.last_m_id = last_m_id;
        this.limit = limit;
    }

    public getMessageParams() {
        const params: number[] = [this.last_m_id, this.limit];
        return params;
    }

    async setTotalCount() {
        const [result, field] = (await connection.query('SELECT COUNT(*) AS totalCount FROM messages')) as [any[], object];

        return result[0];
    }

    async setLastMessageId() {
        const [result, field] = (await connection.query('SELECT m_id FROM messages ORDER BY m_id DESC LIMIT 1')) as [any[], object];

        return result[0];
    }

    async findAllByRoomId({ r_id }: { r_id: number }) {
        const result = [];

        result.push(await this.setLastMessageId());
        result.push(await this.setTotalCount());

        const [messages, field] = (await connection.query('SELECT * FROM messages WHERE r_id = ? AND m_id > ? ORDER BY m_id ASC LIMIT ?', [r_id, this.last_m_id, this.limit])) as [
            MessageDTO[],
            object,
        ];
        result.push(messages);

        console.log(result);
        return result;
    }
}
