import { Router } from 'express';
import Container from 'typedi';
import ChatController from '../controllers/chat';

export default ({ app }: { app: Router }) => {
    const route = Router();
    app.use('/chat', route);
    route.get('/', Container.get(ChatController).getChatRoom.bind(ChatController));
    route.post('/', Container.get(ChatController).generateChatRoom.bind(ChatController));
    route.delete('/:r_id', Container.get(ChatController).deleteChatRoom.bind(ChatController));
    route.get('/:r_id/messages', Container.get(ChatController).getMessages.bind(ChatController));
};
