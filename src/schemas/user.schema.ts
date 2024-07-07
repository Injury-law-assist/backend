import Joi from "joi";
import { UserJoinDTO, UserLoginDTO } from "../dtos/user-request.dto";

export const postJoinUserSchema = Joi.object<UserJoinDTO>({
    email : Joi.string()
                .email({minDomainSegments : 2, tlds : {allow : ['com', 'net']}})
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

export const postLoginUserSchema = Joi.object<UserLoginDTO>({
    email : Joi.string()
                .email({minDomainSegments : 2, tlds : {allow : ['com', 'net']}})
                .required(),   
    password : Joi.string()
                .min(8)
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                .required(),
}).unknown(false);