import Joi from 'joi';
import { RequestCreateMessageDTO, RequestGetMessageDTO } from '../dtos/chat.dto';

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