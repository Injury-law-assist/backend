import { Inject, Service } from 'typedi';
import UserRepository from '../repositories/user';
import { UserJoinDTO, UserLoginDTO } from '../dto/user-request-dto';

@Service()
export default class AuthService {
    constructor(@Inject(() => UserRepository) private readonly userRepository: UserRepository) {}
    login = async ({ email, password }: UserLoginDTO) => {
        const existingUser = await this.userRepository.findOneByPk({ email: email });

        if (!existingUser) throw new Error('존재하지않는 아이디입니다.');
        if (existingUser.u_password !== password) throw new Error('비밀번호가 일치하지않습니다.');
        /**[ ] jwt 토큰 발행 로직 추가 */
        /**[ ] password encrypt 추가 */
        return 'token';
    };
    /** [ ]추후 타입 수정 필요 */
    join = async (user: UserJoinDTO) => {
        const existingUser = (await this.userRepository.findOneByPk({ email: user.email })) as any;
        console.log(existingUser);
        if (existingUser) throw new Error('already exists');
        await this.userRepository.create(user);
        const newUser = await this.userRepository.findOneByPk({ email: user.email });
        return newUser;
    };
}
