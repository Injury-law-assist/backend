import Joi from "joi";
import { RequestCreateChatRoomDTO, RequestGetChatRoomDTO } from "../dtos/chat-request.dto";
import { RequestCreateMessageDTO, RequestGetMessageDTO } from '../dtos/chat-request.dto';

export const postChatRoomSchema = Joi.object<RequestCreateChatRoomDTO>({
    title : Joi.string()
            .required(),

    u_id : Joi.number()
            .integer()
            .required(),
}).unknown(false);

export const getChatRoomSchema = Joi.object<RequestGetChatRoomDTO>({
    r_id : Joi.number()
            .integer()
            .required()
}).unknown(false);


export const postMessageSchema = Joi.object<RequestCreateMessageDTO>({
	r_id: Joi.number()
			.integer()
			.required(),

	u_id: Joi.number()
			.integer()		
			.required(),
			
	m_content: Joi.string()
			.required(),
}).unknown(false);

export const getMessageSchema = Joi.object<RequestGetMessageDTO>({
	m_id : Joi.number()
			.integer()
			.required()
}).unknown(false);