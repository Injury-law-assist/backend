import { Router } from 'express';
import Container from 'typedi';
import ChatController from '../controllers/chat';
import guardMiddleware from '../middlewares/guard';
import {ValidationMiddleware} from "../middlewares/validation"

export default ({ app }: { app: Router }) => {
    const route = Router();
    app.use('/chat', route);
    route.get('/', guardMiddleware, Container.get(ValidationMiddleware).validatorGetChatRoom.bind(ValidationMiddleware), Container.get(ChatController).getChatRooms.bind(ChatController));
    route.post('/', guardMiddleware, Container.get(ValidationMiddleware).validatorPostChatRoom.bind(ValidationMiddleware), Container.get(ChatController).generateChatRoom.bind(ChatController));
    route.delete('/:r_id', guardMiddleware, Container.get(ValidationMiddleware).validationDeleteChatRoom.bind(ValidationMiddleware), Container.get(ChatController).deleteChatRoom.bind(ChatController));
    route.get('/:r_id/messages', guardMiddleware, Container.get(ValidationMiddleware).validatorGetMessage.bind(ValidationMiddleware), Container.get(ChatController).getMessages.bind(ChatController));
};
