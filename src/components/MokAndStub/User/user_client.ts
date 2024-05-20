export interface UserClientType {
  login: (id: string, password: string) => Promise<void>;
}

export class UserClient implements UserClientType {
  login(id: string, password: string) {
    return fetch('http://example.com').then((res) => res.json());
  }
}
