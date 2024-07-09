import { Request, Response, NextFunction } from 'express';
import { userLoginValidator, userJoinValidator } from '../validators/user';
import { postChatRoomValidator, getChatRoomValidator, postMessageValidator, getMessageValidator } from '../validators/chat';
import { Service } from 'typedi';

@Service()
export class ValidationMiddleware {
    validateUserLogin = async (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = userLoginValidator.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        next(); // 다음 미들웨어로 제어 넘김
    };

    validateUserJoin = async (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = userJoinValidator.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        next(); // 다음 미들웨어로 제어 넘김
    };

    validatorPostChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        const postChatRoom = req.body;

        const result = await postChatRoomValidator.validateAsync(postChatRoom);

        if (!result) {
            console.log('validatorPostChatRoom Error');
            //throw new Error();
        }

        next();

        /** 
         * catch(error){
            if(error instanceof ValidationError){
                res.status(500).send(`User Validation error : ${error.message}`);
            }else{
                res.status(500).send(`User err :  ${error}`);
            }
        } */
    };

    validatorGetChatRoom = async (req: Request, res: Response, next: NextFunction) => {
        const getChatRoom = req.body;

        const result = await getChatRoomValidator.validateAsync(getChatRoom);

        if (!result) {
            console.log('validatorGetChatRoom Error');
            //throw new Error();
        }

        next();
    };

    validatorPostMessage = async (req: Request, res: Response, next: NextFunction) => {
        const postMessage = req.body;

        const result = await postMessageValidator.validateAsync(postMessage);

        if (!result) {
            console.log('validatorPostMessage Error');
            //throw new Error();
        }

        next();
    };

    validatorGetMessage = async (req: Request, res: Response, next: NextFunction) => {
        const getMessage = req.body;

        const result = await getMessageValidator.validateAsync(getMessage);

        if (!result) {
            console.log('validatorGetMessage Error');
            //throw new Error();
        }

        next();
    };
}
