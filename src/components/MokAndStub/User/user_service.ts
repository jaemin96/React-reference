import { UserClientType } from './user_client';

export interface UserServiceType {
  userClient: UserClientType;
  isLoggedIn: boolean;
}

export class UserService implements UserServiceType {
  userClient: UserClientType;
  isLoggedIn: boolean;

  constructor(userClient: UserClientType) {
    this.userClient = userClient;
    this.isLoggedIn = false;
  }

  login(id: string, password: string) {
    if (!this.isLoggedIn) {
      return this.userClient.login(id, password).then((data) => (this.isLoggedIn = true));
    }
  }
}
