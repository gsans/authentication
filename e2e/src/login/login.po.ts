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
    element(by.css('[formControlName="username"]')).sendKeys(credentias.username);
    element(by.css('[formControlName="password"]')).sendKeys(credentias.password);
    element(by.css('.btn-primary')).click();
    // wait until loading indicator is not present
    const loading = element(by.css('img[ngIf="loading"]'));
    browser.wait(ExpectedConditions.stalenessOf(loading));
  }

  getPageTitleText() {
    return element(by.css('app-login h2')).getText();
  }

  getErrorMessage() {
    return element(by.css('.alert-danger')).getText();
  }

  getRootElement() {
    return element(by.tagName('app-login')).isPresent();
    //return element(by.css('app-login')).isPresent();
  }
}