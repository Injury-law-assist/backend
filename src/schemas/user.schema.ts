import Joi from "joi";

export const postUserSchema = Joi.object({
    u_email : Joi.string()
                .email({minDomainSegments : 2, tlds : {allow : ['com', 'net']}})
                .required(),

    u_password : Joi.string()
                .min(8)
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .required(),

    u_nickName  : Joi.string()
                .min(3)
                .max(30)
                .required()
}).unknown(false);

export const getUserSchema = Joi.object({
    u_id : Joi.number()
            .integer()
            .required()
}).unknown(false);