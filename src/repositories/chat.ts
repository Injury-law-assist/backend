import mysql from 'mysql2/promise';
import { Inject, Service } from 'typedi';
@Service()
export default class ChatRepository {
    constructor(@Inject('pool') private readonly pool: mysql.Pool) {}
}
