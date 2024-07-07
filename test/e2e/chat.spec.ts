import { Application } from 'express';
import request from 'supertest';
import createApp from '../../src/app';

describe('/api/chat test', () => {
    let app: Application;
    beforeAll(async () => {
        app = await createApp();
    });

    it('✅[ GET /messages ] getMessages', async () => {
        const res = await request(app).get('/api/chat/1/messages');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('messages');
    });
    it('✅[ GET / ] getChatRoom', async () => {
        const res = await request(app).get('/api/chat');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('chatRooms');
    });

    it('✅[ POST / ] joinChatRoom', async () => {
        const res = await request(app).post('/api/chat');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('newChatRoom');
    });

    it('✅[ DELETE / ] exitChatRoom', async () => {
        const res = await request(app).delete('/api/chat/1');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('msg');
    });
});
