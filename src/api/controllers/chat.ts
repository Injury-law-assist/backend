import { NextFunction, Request, Response } from "express";

export default class ChatController {
    async getMessages(req: Request, res: Response, next: NextFunction) {}
    async joinChatRoom(req: Request, res: Response, next: NextFunction) {}
    async getChatRoom(req: Request, res: Response, next: NextFunction) {}
}
