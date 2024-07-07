import Joi from "joi";
import { RequestCreateChatRoomDTO, RequestGetChatRoomDTO } from "../dtos/chat.dto";

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