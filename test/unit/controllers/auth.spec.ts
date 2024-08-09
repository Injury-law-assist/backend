import { Request, Response, NextFunction } from 'express';
import AuthController from '../../../src/api/controllers/auth';
import AuthService from '../../../src/services/auth';
import { UserJoinRequestDTO, UserLoginRequestDTO } from '../../../src/dto/request/user';
import { UserJoinResponseDTO, UserLoginResponseDTO } from '../../../src/dto/response/user';
describe('AuthController', () => {
    let authController: AuthController;
    let mockAuthService: jest.Mocked<AuthService>;
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;

    beforeEach(() => {
        mockAuthService = {} as jest.Mocked<AuthService>;
        authController = new AuthController(mockAuthService);

        req = {
            body: {},
        };

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        next = jest.fn();
    });

    describe('join', () => {
        const userJoinRequestDTO = { email: 'test@test.com', password: 'password123', nickname: 'mock' } as UserJoinRequestDTO;

        it('should call AuthService.join and return the result', async () => {
            const userJoinResponseDTO = {
                message: 'mock',
                statusCode: 200,
                data: {
                    u_id: 1,
                    u_email: 'a@a.com',
                    u_nickname: 'asdasd',
                    u_password: 'asdasdasd',
                    u_created_at: new Date(),
                    u_updated_at: new Date(),
                },
            } as UserJoinResponseDTO;
            mockAuthService.join = jest.fn().mockResolvedValue(userJoinResponseDTO);
            req.body = userJoinRequestDTO;

            await authController.join(req as Request, res as Response, next);

            expect(mockAuthService.join).toHaveBeenCalledWith(userJoinRequestDTO);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(userJoinResponseDTO);
        });

        it('should handle errors thrown by AuthService.join', async () => {
            const error = new Error('Join operation failed');
            mockAuthService.join = jest.fn().mockRejectedValue(error);

            req.body = userJoinRequestDTO;

            await authController.join(req as Request, res as Response, next);

            expect(next).toHaveBeenCalledWith(error);
            expect(res.json).not.toHaveBeenCalled();
        });
    });

    describe('login', () => {
        const userLoginRequestDTO = { email: 'test@test.com', password: 'password123' } as UserLoginRequestDTO;
        it('should call authController.login and return the result', async () => {
            const userLoginResponseDTO = {
                message: 'mock',
                statusCode: 200,
                data: {
                    accessToken: 'token',
                    refreshToken: 'token',
                },
            } as UserLoginResponseDTO;
            mockAuthService.login = jest.fn().mockResolvedValue(userLoginResponseDTO);

            req.body = userLoginRequestDTO;

            await authController.login(req as Request, res as Response, next);

            expect(mockAuthService.login).toHaveBeenCalledWith(userLoginRequestDTO);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(userLoginResponseDTO);
        });
        it('should handle errors thrown by AuthService.login', async () => {
            const error = new Error('Join operation failed');
            mockAuthService.login = jest.fn().mockRejectedValue(error);

            req.body = userLoginRequestDTO;

            await authController.login(req as Request, res as Response, next);

            expect(next).toHaveBeenCalledWith(error);
            expect(res.json).not.toHaveBeenCalled();
        });
    });
});
