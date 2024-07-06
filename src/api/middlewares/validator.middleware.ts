import {Request, Response, NextFunction } from "express";
import {ValidationError} from "joi";
import { postUserSchema, getUserSchema} from "../../schemas/user.schema";
import {postChatRoomSchema, getChatRoomSchema}from "../../schemas/chatRoom.schema";
import {postMessageSchema, getMessageSchema}from "../../schemas/message.schema";

export const postUserValidator =  async(req : Request, res : Response, next : NextFunction)=>{
    try{
        const postUser = req.body;

        const result = await postUserSchema.validateAsync(postUser); 
        
        if(!result){
            throw new Error();
        }
        
        next();
    }catch(error){
        // if(error instanceof ValidationError){
        //     res.status(500).send(`User Validation error : ${error.message}`);
        // }else{
        //     res.status(500).send(`User err :  ${error}`);
        // }
    }
}; 

export const getUserValidator =  async(req : Request, res : Response, next : NextFunction)=>{
    try{
        const getUser = req.body;

        const result = await getUserSchema.validateAsync(getUser); 
        
        if(!result){
            throw new Error();
        }
        
        next();
    }catch(error){

    }
}; 

export const postChatRoomValidator = async(req : Request, res : Response, next : NextFunction)=>{
    try{
        const postChatRoom = req.body;

        const result = await postChatRoomSchema.validateAsync(postChatRoom);

        if(!result){
            throw new Error();
        }
        
        next();
    }catch(error){
        
    }
}

export const getChatRoomValidator = async(req : Request, res : Response, next : NextFunction)=>{
    try{
        const getChatRoom = req.body;

        const result = await getChatRoomSchema.validateAsync(getChatRoom);

        if(!result){
            throw new Error();
        }
        
        next();
    }catch(error){
        
    }
}

export const postmessageValidator = async(req : Request, res : Response, next : NextFunction)=>{
    try{
        const postMessage = req.body;

        const result = await postMessageSchema.validateAsync(postMessage);

        if(!result){
            throw new Error();
        }
        
        next();
    }catch(error){
        
    }
}
export const getmessageValidator = async(req : Request, res : Response, next : NextFunction)=>{
    try{
        const getMessage = req.body;

        const result = await getMessageSchema.validateAsync(getMessage);

        if(!result){
            throw new Error();
        }
        
        next();
    }catch(error){
        
    }
}

