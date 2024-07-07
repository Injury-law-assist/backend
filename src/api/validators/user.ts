import { Request, Response, NextFunction } from 'express';
import { postJoinUserSchema, postLoginUserSchema } from '../../schemas/user.schema';

export const postLoginUserValidator = async (req: Request, res: Response, next: NextFunction) => {
    const postLoginUser = req.body;

    const result = await postLoginUserSchema.validateAsync(postLoginUser);

    if (!result) {
        console.log('validator Error');
        //throw new Error();
    }

    next();
};

export const postJoinUserValidator = async (req: Request, res: Response, next: NextFunction) => {
    const postJoinUser = req.body;

    const result = await postJoinUserSchema.validateAsync(postJoinUser);

    if (!result) {
        console.log('validator Error');
        //throw new Error();
    }

    next();
};
