import { UserClientType } from './user_client';

export class UserService {
  userClient: UserClientType;
  isLoggedIn: boolean;

  constructor(userClient: UserClientType) {
    this.userClient = userClient;
    this.isLoggedIn = false;
  }

  login(id: string, password: string) {
    return this.userClient.login(id, password);
  }
}
