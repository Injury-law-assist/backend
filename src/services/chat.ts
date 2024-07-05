import { Service } from 'typedi';

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
