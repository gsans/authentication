import { browser, by, element, ExpectedConditions } from 'protractor';

export class LoginPage {
  private credentials = {
    username: 'test',
    password: 'pa$$w0rd'
  };

  navigateTo() {
    return browser.get('/login');
  }

  fillCredentials(credentias: any = this.credentials) {

  }

  getPageTitleText() {
    return element(by.css('app-login h2')).getText();
  }

  getErrorMessage() {
    
  }

  getRootElement() {
    
  }
}