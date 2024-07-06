import Joi from 'joi';

export const MessageSchema = Joi.object({
	m_id: Joi.number()
			.integer(),

	cr_id: Joi.number()
			.integer()
			.required(),

	u_id: Joi.number()
			.integer()		
			.required(),
			
	m_content: Joi.string()
			.required(),

	m_created_at: Joi.date()
			.required(),

	m_updated_at: Joi.date()
			.required()
});