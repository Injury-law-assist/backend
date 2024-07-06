import { Inject, Service } from 'typedi';
import ChatRepository from './../repositories/chat';

@Service()
export default class ChatService {
    constructor(@Inject(() => ChatRepository) private readonly chatRepository: ChatRepository) {}
    getMessages = async ({ r_id }: { r_id: number }) => {
        /**pageNation(Scrorll 기반으로 하기) */
        return await this.chatRepository.getMessages({ r_id });
    };
    getChatRooms = async ({ u_id }: { u_id: number }) => {
        /**pageNation(Scrorll 기반으로 하기) */
        return await this.chatRepository.getChatRooms({ u_id });
    };
    generateChatRoom = async ({ u_id }: { u_id: number }) => {
        return await this.chatRepository.generateChatRoom({ u_id });
    };
    deleteChatRoom = async ({ r_id }: { r_id: number }) => {
        /**내가 소유한 chatroom인지 check */
        /**존재하는 chatroom인지 check */
        /**return은 얘는 메시지만 */
        return await this.chatRepository.deleteChatRoom({ r_id });
    };
}
