import {Request, Response, NextFunction } from "express";
import { postUserSchema} from "../../../schemas/user.schema";

export const postUserValidator =  async(req : Request, res : Response, next : NextFunction)=>{
    const postUser = req.body;

    const result = await postUserSchema.validateAsync(postUser); 
    
    if(!result){
        console.log("validator Error")
        //throw new Error();
    }
    
    next();
}; 

