import { Request, Response, NextFunction } from 'express';
import ChatController from '../../../src/api/controllers/chat';
import ChatService from '../../../src/services/chat';
import { Payload } from '../../../src/types/express';
import { DeleteChatRoomResponseDTO, GenerateChatRoomResponseDTO, GenerateChatRoomStatusDTO, GetChatRoomsResponseDTO, GetMessagesResponseDTO } from '../../../src/dto/response/chat';
describe('ChatController', () => {
    let chatController: ChatController;
    let mockChatService: jest.Mocked<ChatService>;
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;
    const payload = {
        u_id: 1,
        u_email: 'k@a.com',
        u_nickname: 'asd',
        u_created_at: new Date(),
        u_updated_at: new Date(),
    } as Payload;

    beforeEach(() => {
        mockChatService = {} as jest.Mocked<ChatService>;
        chatController = new ChatController(mockChatService);

        req = {
            user: payload as Payload,
            body: {},
            params: {} as any,
        };

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        next = jest.fn();
    });
    describe('getMessages', () => {
        it('should return messages successfully', async () => {
            const messageResponseDTO: GetMessagesResponseDTO = {
                message: 'mock',
                statusCode: 200,
                data: [],
            };

            req.params = { r_id: 1 } as { r_id: any };
            mockChatService.getMessages = jest.fn().mockResolvedValue(messageResponseDTO);

            await chatController.getMessages(req as Request, res as Response, next);

            expect(mockChatService.getMessages).toHaveBeenCalledWith({
                r_id: 1,
                u_id: 1,
            });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(messageResponseDTO);
        });
    });

    describe('getChatRooms', () => {
        it('should return chatRooms successfully', async () => {
            const chatRoomResponseDTO: GetChatRoomsResponseDTO = {
                message: 'mock',
                statusCode: 200,
                data: [],
            };

            mockChatService.getChatRooms = jest.fn().mockResolvedValue(chatRoomResponseDTO);

            await chatController.getChatRooms(req as Request, res as Response, next);

            expect(mockChatService.getChatRooms).toHaveBeenCalledWith({
                u_id: 1,
            });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(chatRoomResponseDTO);
        });
    });

    describe('generateChatRoom', () => {
        it('should return to generate chatRoom successfully', async () => {
            const chatRoomResponseDTO: GenerateChatRoomResponseDTO = {
                message: 'mock',
                statusCode: 200,
                data: {
                    u_id: 1,
                    title: 'new',
                    cr_created_at: new Date(),
                    cr_updated_at: new Date(),
                    cr_id: 1,
                },
            };

            req.body = {
                title: 'chatbot',
            };
            mockChatService.generateChatRoom = jest.fn().mockResolvedValue(chatRoomResponseDTO);

            await chatController.generateChatRoom(req as Request, res as Response, next);

            expect(mockChatService.generateChatRoom).toHaveBeenCalledWith({
                u_id: 1,
                title: 'chatbot',
            });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(chatRoomResponseDTO);
        });
    });

    describe('generateChatRoomStatus', () => {
        it('should return to generate ChatRoomStatus successfully', async () => {
            const chatRoomResponseDTO: GenerateChatRoomStatusDTO = {
                message: 'mock',
                statusCode: 200,
            };

            req.params = { r_id: 1 } as { r_id: any };
            req.body = {};
            mockChatService.generateChatRoomStatus = jest.fn().mockResolvedValue(chatRoomResponseDTO);

            await chatController.generateChatRoomStatus(req as Request, res as Response, next);

            expect(mockChatService.generateChatRoomStatus).toHaveBeenCalledWith(1, {});
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(chatRoomResponseDTO);
        });
    });

    describe('deleteChatRoom', () => {
        it('should return to delete ChatRoom successfully', async () => {
            const chatRoomResponseDTO: DeleteChatRoomResponseDTO = {
                message: 'mock',
                statusCode: 200,
            };

            req.params = { r_id: 1 } as { r_id: any };
            mockChatService.deleteChatRoom = jest.fn().mockResolvedValue(chatRoomResponseDTO);

            await chatController.deleteChatRoom(req as Request, res as Response, next);

            expect(mockChatService.deleteChatRoom).toHaveBeenCalledWith({
                r_id: 1,
            });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(chatRoomResponseDTO);
        });
    });
});
