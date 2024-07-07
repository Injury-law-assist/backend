import { Inject, Service } from 'typedi';
import UserRepository from '../repositories/user';
import { UserJoinRequestDTO, UserLoginRequestDTO } from '../dto/request/user';
import { UserJoinResponseDTO, UserLoginResponseDTO, UserDTO } from '../dto/response/user';

/**[ ] password encrypt 추가 */
@Service()
export default class AuthService {
    constructor(@Inject(() => UserRepository) private readonly userRepository: UserRepository) {}
    generateToken() {
        /**[ ] jwt 토큰 발행 로직 추가 */
        return ['refreshToken', 'accessToken'];
    }
    login = async ({ email, password }: UserLoginRequestDTO): Promise<UserLoginResponseDTO> => {
        const existingUser = await this.userRepository.findOneByPk({ email: email });

        if (!existingUser) throw new Error('존재하지않는 아이디입니다.');

        if (existingUser.u_password !== password) throw new Error('비밀번호가 일치하지않습니다.');

        const [refreshToken, accessToken] = this.generateToken();
        const userLoginResponseDTO: UserLoginResponseDTO = {
            statusCode: 200,
            message: '로그인에 성공하였습니다.',
            data: { refreshToken, accessToken },
        };
        return userLoginResponseDTO;
    };
    join = async (user: UserJoinRequestDTO): Promise<UserJoinResponseDTO> => {
        const existingUser = await this.userRepository.findOneByPk({ email: user.email });
        console.log(existingUser);
        if (existingUser) throw new Error('이미 존재하는 이메일입니다.');
        await this.userRepository.create(user);
        const createdUser = await this.userRepository.findOneByPk({ email: user.email });
        const userJoinResponseDTO: UserJoinResponseDTO = {
            statusCode: 200,
            message: '가입에 성공하였습니다.',
            data: createdUser,
        };
        return userJoinResponseDTO;
    };
}
