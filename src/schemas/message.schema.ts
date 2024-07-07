import Joi from 'joi';

export const postMessageSchema = Joi.object({
	r_id: Joi.number()
			.integer()
			.required(),

	u_id: Joi.number()
			.integer()		
			.required(),
			
	m_content: Joi.string()
			.required(),
}).unknown(false);

export const getMessageSchema = Joi.object({
	m_id : Joi.number()
			.integer()
			.required()
}).unknown(false);