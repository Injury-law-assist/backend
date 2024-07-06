import { NextFunction, Request, Response } from 'express';
import ChatService from '../../services/chat';
import { Inject, Service } from 'typedi';

@Service()
export default class ChatController {
    constructor(@Inject(() => ChatService) private readonly chatService: ChatService) {}

    getMessages = async (req: Request, res: Response, next: NextFunction) => {
        const messages = await this.chatService.getMessages();
        return res.status(200).json({ messages });
    };
    getChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        const chatRooms = await this.chatService.getChatRooms();
        return res.status(200).json({ chatRooms });
    };
    joinChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        const newChatRoom = await this.chatService.joinChatRoom();
        return res.status(200).json({ newChatRoom });
    };
    exitChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        await this.chatService.exitChatRoom();
        return res.status(200).json({ msg: 'successfully deleted' });
    };
}
