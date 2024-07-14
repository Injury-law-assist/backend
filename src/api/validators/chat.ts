import Joi from 'joi';
import { CreateChatRoomRequestDTO, GetChatRoomRequestDTO, DeleteChatRoomRequestDTO, CreateMessageRequestDTO, GetMessageRequestDTO } from '../../dto/request/chat';

export const postChatRoomValidator = Joi.object<CreateChatRoomRequestDTO>({
    title: Joi.string().required(),
    u_id: Joi.number().integer().required(),
}).unknown(false);

export const getChatRoomValidator = Joi.object<GetChatRoomRequestDTO>({
    r_id: Joi.number().integer().required(),
}).unknown(false);

export const deleteChatRoomValidator = Joi.object<DeleteChatRoomRequestDTO>({
    r_id : Joi.number().integer().required(),
    authorization : Joi.string().required(),
}).unknown(false);

export const postMessageValidator = Joi.object<CreateMessageRequestDTO>({
    r_id: Joi.number().integer().required(),
    u_id: Joi.number().integer().required(),
    m_content: Joi.string().required(),
}).unknown(false);

export const getMessageValidator = Joi.object<GetMessageRequestDTO>({
    m_id: Joi.number().integer().required(),
    authorization : Joi.string().required(),
}).unknown(false);
