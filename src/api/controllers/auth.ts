import { NextFunction, Request, Response } from "express";
import AuthService from "../../services/auth";
import { Inject, Service } from "typedi";

@Service()
export default class AuthController {
    constructor(@Inject(() => AuthService) private readonly authService: AuthService) {}

    login = async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200).json({ msg: await this.authService.login() });
    };
    join = async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200).json({ msg: await this.authService.join() });
    };
}
