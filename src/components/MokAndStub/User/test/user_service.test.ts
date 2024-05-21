import { UserClient } from '../user_client';
import { UserService } from '../User_service';

jest.mock('../user_client.ts'); // userClient mock

describe('UserService', () => {
  let userService: UserService;
  let mockLogin: jest.Mock;

  beforeEach(() => {
    const MockedUserClient = UserClient as jest.MockedClass<typeof UserClient>;
    mockLogin = jest.fn();

    MockedUserClient.prototype.login = mockLogin;

    userService = new UserService(new MockedUserClient());
  });

  it('should return success', async () => {
    mockLogin.mockResolvedValue('Success!');
    const result = await userService.login('jaemin', '1234');
    expect(result).toBe('Success!');
  });

  it('should return fail', async () => {
    mockLogin.mockImplementation(async (id: string, password: string) => {
      if (id === 'jaemin' && password === '1234') {
        return 'Success!';
      } else {
        throw new Error('Fail!');
      }
    });

    try {
      const result = await userService.login('abc', '4434');
      // expect(result).toBe('Success!');
    } catch (error) {
      expect(error.message).toBe('Fail!');
    }
  });
});
