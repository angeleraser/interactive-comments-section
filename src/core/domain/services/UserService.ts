import { User } from '../interfaces/User';

interface UserService {
  login: (credentials: { username: string }) => Promise<User>;
  logout: () => Promise<void>;
}

export { UserService };
