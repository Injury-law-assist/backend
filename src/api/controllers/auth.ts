import { NextFunction, Request, Response } from "express";
import AuthService from "../../services/auth";

export default class AuthController {
    constructor(private readonly authService: AuthService) {}

    async login(req: Request, res: Response, next: NextFunction) {}
    async join(req: Request, res: Response, next: NextFunction) {}
}
