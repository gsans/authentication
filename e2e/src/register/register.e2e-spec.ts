import { browser, by, element, ExpectedConditions } from 'protractor';
import { RegisterPage, User } from './register.po';
import { AdminPage } from '../admin/admin.po';
import { LoginPage } from '../login/login.po';

describe('Register page', () => {
  let registerPage: RegisterPage;
  let adminPage: AdminPage;
  let loginPage: LoginPage;

  beforeEach(() => {
    registerPage = new RegisterPage();
    adminPage = new AdminPage();
    loginPage = new LoginPage();
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear();');
  }); 

  it('should allow new users to register', () => {
    const user = {
      firstName: 'test',
      lastName: 'dummy',
      username: 'test',
      password: 'pa$$w0rd'
    };
    registerPage.navigateTo();
    registerPage.register(user);
    expect(adminPage.getRootElement()).toBe(true);
    expect(adminPage.getSuccessMessage()).toEqual('Registration successful');
  });

  fit('should not allow duplicate usernames', () => {
    const user = {
      firstName: 'test',
      lastName: 'dummy',
      username: 'test',
      password: 'pa$$w0rd'
    };
    // register user and logout
    registerPage.navigateTo();
    registerPage.register(user);
    adminPage.logout();
    // register same user
    registerPage.navigateTo();
    registerPage.register(user);
    expect(registerPage.getErrorMessage()).toEqual(`Username "${user.username}" is already taken`);
  });

  it('should allow cancelling registration', () => {
    registerPage.navigateTo();
    registerPage.cancelRegister();
    expect(loginPage.getRootElement()).toBe(true);
  });
})