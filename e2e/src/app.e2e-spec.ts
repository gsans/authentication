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
  let loginPage: LoginPage;
  let adminPage: AdminPage;
  let protectedPage : ProtectedPage;

  beforeEach(() => {
    page = new AppPage();
    adminPage = new AdminPage();
    protectedPage = new ProtectedPage();
    loginPage = new LoginPage();
  });

  it('should display home page by default', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Home');
  });

  describe('Protected content', () => {
    it('should redirect to login for protected content', () => {
      adminPage.navigateTo();
      expect(loginPage.getPageTitleText()).toBe('Login');
      protectedPage.navigateTo();
      expect(loginPage.getPageTitleText()).toBe('Login');
    })

    describe('Registered users', () => {
      let homePage: HomePage;
      let registerPage: RegisterPage;
      let adminPage: AdminPage;
      let loginPage: LoginPage;
      
      beforeEach(() => {   
        const user = {
          firstName: 'test',
          lastName: 'dummy',
          username: 'test',
          password: 'pa$$w0rd'
        };   
        registerPage = new RegisterPage();
        adminPage = new AdminPage();
        homePage = new HomePage();
        loginPage = new LoginPage();
        // register user
        registerPage.navigateTo();
        registerPage.register(user);
        // logout
        adminPage.logout();
      });

      it('should redirect to original protected content after login', () => {
        // protected content navigates to login
        adminPage.navigateTo();
        expect(loginPage.getPageTitleText()).toBe('Login');
        // login to original admin page
        loginPage.fillCredentials({
          username: 'test',
          password: 'pa$$w0rd'
        });
        expect(adminPage.getRootElement()).toBe(true);
      })
    })

  })

  describe('Logged In Users', () => {
    let homePage: HomePage;
    let registerPage: RegisterPage;
    let adminPage: AdminPage;
    let loginPage: LoginPage;
    
    beforeEach(() => {   
      const user = {
        firstName: 'test',
        lastName: 'dummy',
        username: 'test',
        password: 'pa$$w0rd'
      };   
      registerPage = new RegisterPage();
      adminPage = new AdminPage();
      homePage = new HomePage();
      loginPage = new LoginPage();
      registerPage.navigateTo();
      registerPage.register(user);
    });

    afterEach(() => {
      browser.executeScript('window.localStorage.clear();');
    });
    
    it('should allow to access protected pages', () => {
      adminPage.navigateTo();
      expect(adminPage.getRootElement()).toBe(true);
    });

    it('should allow to logout and lose access to protected content', () => {
      // logout brings the user to home
      adminPage.logout();
      expect(homePage.getRootElement()).toBe(true);
      // trying to access /admin brings login
      adminPage.navigateTo();
      expect(loginPage.getPageTitleText()).toBe('Login');
      browser.getCurrentUrl().then(url => {
        let queryParams = parseQueryParams(url);
        expect(queryParams.returnUrl).toBe('/admin');
      })
    });

    it('should allow logging in after logging out', () => {
      adminPage.logout();
      expect(homePage.getRootElement()).toBe(true);
      loginPage.navigateTo();
      loginPage.fillCredentials();
      expect(adminPage.getRootElement()).toBe(true);
    });   

  });
});
