export interface UserClientType {
  login: (id: string, password: string) => Promise<string>;
}

export class UserClient implements UserClientType {
  async login(id: string, password: string): Promise<string> {
    const response = await fetch('http://example.com');
    const data = await response.json();
    return data.message;
  }
}
