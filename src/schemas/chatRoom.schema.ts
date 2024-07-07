import Joi from "joi";

export const postChatRoomSchema = Joi.object({
    title : Joi.string()
            .required(),

    u_id : Joi.number()
            .integer()
            .required(),
}).unknown(false);

export const getChatRoomSchema = Joi.object({
    r_id : Joi.number()
            .integer()
            .required()
}).unknown(false);