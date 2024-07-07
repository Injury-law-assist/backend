import { Inject, Service } from 'typedi';
import UserRepository from '../repositories/user';
import { UserJoinRequestDTO, UserLoginRequestDTO } from '../dto/request/user';
import { UserJoinResponseDTO, UserLoginResponseDTO } from '../dto/response/user';

@Service()
export default class AuthService {
    constructor(@Inject(() => UserRepository) private readonly userRepository: UserRepository) {}
    login = async ({ email, password }: UserLoginRequestDTO): Promise<UserLoginResponseDTO> => {
        const existingUser = await this.userRepository.findOneByPk({ email: email });

        if (!existingUser) throw new Error('존재하지않는 아이디입니다.');
        if (existingUser.u_password !== password) throw new Error('비밀번호가 일치하지않습니다.');
        /**[ ] jwt 토큰 발행 로직 추가 */
        /**[ ] password encrypt 추가 */
        const [refreshToken, accessToken] = ['refreshToken', 'accessToken'];
        const userLoginResponseDTO: UserLoginResponseDTO = {
            statusCode: 200,
            message: '로그인에 성공하였습니다.',
            data: { refreshToken, accessToken },
        };
        return userLoginResponseDTO;
    };
    /** [ ]추후 타입 수정 필요 */
    join = async (user: UserJoinRequestDTO): Promise<UserJoinResponseDTO> => {
        const existingUser = (await this.userRepository.findOneByPk({ email: user.email })) as any;
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
