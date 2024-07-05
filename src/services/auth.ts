import { Service } from 'typedi';

@Service()
export default class AuthService {
    login = async () => {
        return 'login';
    };
    join = async () => {
        return 'join';
    };
}
