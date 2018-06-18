import { ProtectedPage } from './protected.po';
import { LoginPage } from '../login/login.po';
import { browser } from 'protractor';
import { parseQueryParams } from '../../utils/utils';

describe('Protected page', () => {
  let protectedPage: ProtectedPage;
  let loginPage: LoginPage;

  beforeEach(() => {
    protectedPage = new ProtectedPage();
    loginPage = new LoginPage();
  });

  it('should redirect to login setting returnUrl', () => {
    protectedPage.navigateTo();
    expect(loginPage.getPageTitleText()).toBe('Login');
    expect(loginPage.getRootElement()).toBe(true);
    browser.getCurrentUrl().then(url => {
      let queryParams = parseQueryParams(url);
      expect(queryParams.returnUrl).toBe('/protected');
    })
  });
});