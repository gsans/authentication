import { browser, by, element, ExpectedConditions } from 'protractor';
import { unescapeHtml } from '@angular/platform-browser/src/browser/transfer_state';

export interface User {
  firstName: string,
  lastName: string,
  username: string,
  password: string
}

export class RegisterPage {
  navigateTo() {
    return browser.get('/register');
  }

  cancelRegister() {
    element(by.linkText('Cancel')).click(); 
  }

  public register(user: User) {
    element(by.css('[formControlName="firstName"]')).sendKeys(user.firstName);
    element(by.css('[formControlName="lastName"]')).sendKeys(user.lastName);    
    element(by.css('[formControlName="username"]')).sendKeys(user.username);
    element(by.css('[formControlName="password"]')).sendKeys(user.password);
    element(by.css('.btn-primary')).click();
    // wait until loading indicator is not present
    const loading = element(by.css('img[ngIf="loading"]'));
    browser.wait(ExpectedConditions.stalenessOf(loading));
  }

  getPageTitleText() {
    return element(by.css('app-root h2')).getText();
  }

  getErrorMessage() {
    return element(by.css('.alert-danger')).getText();
  }

}