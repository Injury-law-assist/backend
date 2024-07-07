import Joi from "joi";
import { UserJoinRequestDTO, UserLoginRequestDTO } from "../dtos/request/user.dto";

export const postJoinUserSchema = Joi.object<UserJoinRequestDTO>({
    email : Joi.string()
                .email()//.email({minDomainSegments : 2, tlds : {allow : ['com', 'net']}})
                .required(),

    password : Joi.string()
                .min(8)
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .required(),

    nickname  : Joi.string()
                .min(3)
                .max(30)
                .required()
}).unknown(false);

export const postLoginUserSchema = Joi.object<UserLoginRequestDTO>({
    email : Joi.string()
                .email({minDomainSegments : 2, tlds : {allow : ['com', 'net']}})
                .required(),   
    password : Joi.string()
                .min(8)
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .required(),
}).unknown(false);