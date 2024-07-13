import { Inject, Service } from 'typedi';
import ChatRepository from './../repositories/chat';
import { ChatRoomDTO, DeleteChatRoomResponseDTO, GenerateChatRoomResponseDTO, GetChatRoomsResponseDTO, GetMessagesResponseDTO } from '../dto/response/chat';
import MessageRepository from '../repositories/message';

@Service()
export default class ChatService {
    getMessages = async () => {
        return 'getMessages';
    };
    getChatRoom = async () => {
        return 'getChatRoom';
    };
    joinChatRoom = async () => {
        return 'joinChatRoom';
    };
    exitChatRoom = async () => {
        return 'exitChatRoom';
    };
}
