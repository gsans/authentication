import { AdminPage } from './admin.po';
import { LoginPage } from '../login/login.po';
import { browser } from 'protractor';
import { parseQueryParams } from '../../utils/utils';
 
describe('Admin page', () => {
  let adminPage: AdminPage;
  let loginPage: LoginPage;

  beforeEach(() => {
    adminPage = new AdminPage();
    loginPage = new LoginPage();
  });

  it('should redirect to login setting returnUrl', () => {
    adminPage.navigateTo();
    expect(loginPage.getPageTitleText()).toBe('Login');
    expect(loginPage.getRootElement()).toBe(true);
    browser.getCurrentUrl().then(url => {
      let queryParams = parseQueryParams(url);
      expect(queryParams.returnUrl).toBe('/admin');
    })
  });
});