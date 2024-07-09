import Joi from 'joi';

export const userLoginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}).unknown(false);

export const userJoinValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    nickname: Joi.string().required(),
}).unknown(false);
