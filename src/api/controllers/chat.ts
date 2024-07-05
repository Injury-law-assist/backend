import { NextFunction, Request, Response } from 'express';
import ChatService from '../../services/chat';
import { Inject, Service } from 'typedi';

@Service()
export default class ChatController {
    constructor(@Inject(() => ChatService) private readonly chatService: ChatService) {}

    getMessages = async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200).json({ msg: await this.chatService.getMessages() });
    };
    getChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200).json({ msg: await this.chatService.getChatRoom() });
    };
    joinChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200).json({ msg: await this.chatService.joinChatRoom() });
    };
    exitChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200).json({ msg: await this.chatService.exitChatRoom() });
    };
}
