import Joi from "joi";

export const UserSchema = Joi.object({
    u_id :Joi.number()
            .integer(),

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
                .required(),
    u_create_at : Joi.date()
                .required(),
    u_updated_at : Joi.date()
                .required()
});