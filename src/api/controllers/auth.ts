import { NextFunction, Request, Response } from 'express';
import AuthService from '../../services/auth';
import { Inject, Service } from 'typedi';
import { UserJoinDTO, UserLoginDTO } from '../../dto/user-request-dto';

@Service()
export default class AuthController {
    constructor(@Inject(() => AuthService) private readonly authService: AuthService) {}

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body as UserLoginDTO;
            const token = await this.authService.login({ email, password });
            return res.status(200).json({ msg: token });
        } catch (err) {
            next(err);
        }
    };

    join = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newUser = req.body as UserJoinDTO;
            const createdUser = await this.authService.join(newUser);
            return res.status(200).json({ user: createdUser });
        } catch (err) {
            next(err);
        }
    };
}
