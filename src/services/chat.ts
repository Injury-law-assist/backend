import { Service } from 'typedi';

@Service()
export default class ChatService {
    getMessages = async () => {
        return 'getMessages';
    };
    getChatRoom = async () => {
        return 'getChatRoom';
    };
    generateChatRoom = async ({ u_id }: { u_id: number }) => {
        return await this.chatRepository.generateChatRoom({ u_id });
    };
    exitChatRoom = async () => {
        return 'exitChatRoom';
    };
}
