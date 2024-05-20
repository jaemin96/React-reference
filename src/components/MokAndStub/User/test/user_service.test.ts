import { UserClient, UserClientType } from '../user_client';
import { UserService } from '../User_service';

describe('UserService', () => {
  let userService: UserService;
  let mockUserClient: jest.Mocked<UserClientType>;

  beforeEach(() => {
    mockUserClient = {
      login: jest.fn(),
    };

    userService = new UserService(mockUserClient);
  });

  it('call', async () => {
    mockUserClient.login.mockResolvedValueOnce();

    const result = await userService.login('abc', 'abc');
    expect(result).toBe(true);
  });
});
