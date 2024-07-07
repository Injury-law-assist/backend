import { Application, NextFunction, Request, Response } from 'express';
import ChatService from '../../services/chat';
import { Inject, Service } from 'typedi';
import error from '../middlewares/error';

@Service()
export default class ChatController {
    constructor(@Inject(() => ChatService) private readonly chatService: ChatService) {}

    getMessages = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const r_id = parseInt(req.params.r_id) as number;
            const messages = await this.chatService.getMessages({ r_id });
            return res.status(200).json({ messages });
        } catch (err) {
            return next(err);
        }
    };
    getChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const u_id = 1;
            const chatRooms = await this.chatService.getChatRooms({ u_id });
            return res.status(200).json({ chatRooms });
        } catch (err) {
            return next(err);
        }
    };
    generateChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const u_id = 1;
            const newChatRoom = await this.chatService.generateChatRoom({ u_id });
            return res.status(200).json({ newChatRoom });
        } catch (err) {
            return next(err);
        }
    };
    deleteChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const r_id = parseInt(req.params.r_id) as number;
            await this.chatService.deleteChatRoom({ r_id });
            return res.status(200).json({ msg: 'successfully deleted' });
        } catch (err) {
            return next(err);
        }
    };
}
