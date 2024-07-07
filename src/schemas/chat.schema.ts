import Joi from "joi";
import { CreateChatRoomRequestDTO, GetChatRoomRequestDTO } from "../dtos/request/chat-request.dto";
import { CreateMessageRequestDTO, GetMessageRequestDTO } from '../dtos/request/chat-request.dto';

export const postChatRoomSchema = Joi.object<CreateChatRoomRequestDTO>({
    title : Joi.string()
            .required(),

    u_id : Joi.number()
            .integer()
            .required(),
}).unknown(false);

export const getChatRoomSchema = Joi.object<GetChatRoomRequestDTO>({
    r_id : Joi.number()
            .integer()
            .required()
}).unknown(false);


export const postMessageSchema = Joi.object<CreateMessageRequestDTO>({
	r_id: Joi.number()
			.integer()
			.required(),

	u_id: Joi.number()
			.integer()		
			.required(),
			
	m_content: Joi.string()
			.required(),
}).unknown(false);

export const getMessageSchema = Joi.object<GetMessageRequestDTO>({
	m_id : Joi.number()
			.integer()
			.required()
}).unknown(false);