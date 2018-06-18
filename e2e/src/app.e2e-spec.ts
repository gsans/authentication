import { browser, by, element, ExpectedConditions } from 'protractor';
import { AppPage } from './app.po';
import { RegisterPage, User } from './register/register.po';
import { AdminPage } from './admin/admin.po';
import { LoginPage } from './login/login.po';
import { HomePage } from './home/home.po';
import { ProtectedPage } from './protected/protected.po';
import { parseQueryParams } from '../utils/utils';

describe('Authentication App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page by default', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Home');
  });
});
