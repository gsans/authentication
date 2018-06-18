import { LoginPage } from './login.po';
import { browser, element, by } from 'protractor';

describe('Login page', () => {
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
  });

  it('should allow new users to register', () => {
 
  });

  it('should stay on “login” page and see error notification when using wrong credentials', () => {

  });
})