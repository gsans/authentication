import { LoginPage } from './login.po';
import { AdminPage } from '../admin/admin.po';
import { browser, element, by } from 'protractor';
import { screenshot } from '../../utils/utils';

describe('Login page', () => {
  let loginPage: LoginPage;
  let adminPage: AdminPage;

  const wrongCredentials = {
    username: 'wrongname',
    password: 'wrongpassword'
  };

  beforeEach(() => {
    loginPage = new LoginPage();
    adminPage = new AdminPage();
  });

  it('should allow new users to register', () => {
    loginPage.navigateTo();
    loginPage.fillCredentials({
      username: 'newuser',
      password: 'pa$$w0rd'
    });
    expect(loginPage.getPageTitleText()).toEqual('Login');
    expect(loginPage.getErrorMessage()).toEqual('Username or password is incorrect');
  });

  it('should stay on “login” page and see error notification when using wrong credentials', () => {
    loginPage.navigateTo();
    loginPage.fillCredentials(wrongCredentials);
    expect(loginPage.getPageTitleText()).toEqual('Login');
    expect(loginPage.getErrorMessage()).toEqual('Username or password is incorrect');
    browser.takeScreenshot().then(png => screenshot(png, 'login_failed.png'));
  });
})