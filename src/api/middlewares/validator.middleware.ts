import {Request, Response, NextFunction } from "express";
import {ValidationError} from "joi";
import { UserSchema} from "../../schemas/user.schema";
import {ChatRoomSchema}from "../../schemas/chatRoom.schema";
import {JoinRoomSchema}from "../../schemas/joinRoom.schema";
import {MessageSchema}from "../../schemas/message.schema";

const serValidator =  async(req : Request, res : Response, next : NextFunction)=>{
    try{
        const user = req.body;

        const result = await UserSchema.validateAsync(user); 
        
        if(!result){
            throw new Error();
        }
        
        next();
    }catch(error){
        if(error instanceof ValidationError){
            res.status(500).send(`User Validation error : ${error.message}`);
        }else{
            res.status(500).send(`User err :  ${error}`);
        }
    }
}; 

const chatRoomValidator = async(req : Request, res : Response, next : NextFunction)=>{
    try{
        const chatRoom = req.body;

        const result = await ChatRoomSchema.validateAsync(chatRoom);

        if(!result){
            throw new Error();
        }
        
        next();
    }catch(error){
        if(error instanceof ValidationError){
            res.status(500).send(`ChatRoom Validation error : ${error.message}`);
        }else{
            res.status(500).send(`ChatRoom err :  ${error}`);
        }
    }
}

const joinRoomValidator = async(req : Request, res : Response, next : NextFunction)=>{
    try{
        const joinRoom = req.body;

        const result = await JoinRoomSchema.validateAsync(joinRoom);

        if(!result){
            throw new Error();
        }
        
        next();
    }catch(error){
        if(error instanceof ValidationError){
            res.status(500).send(`JoinRoom Validation error : ${error.message}`);
        }else{
            res.status(500).send(`JoinRoom err :  ${error}`);
        }
    }
}

const MessageValidator = async(req : Request, res : Response, next : NextFunction)=>{
    try{
        const message = req.body;

        const result = await MessageSchema.validateAsync(message);

        if(!result){
            throw new Error();
        }
        
        next();
    }catch(error){
        if(error instanceof ValidationError){
            res.status(500).send(`Message Validation error : ${error.message}`);
        }else{
            res.status(500).send(`Message err :  ${error}`);
        }
    }
}

export {serValidator, chatRoomValidator, joinRoomValidator, MessageValidator}
