import { browser, by, element, ExpectedConditions } from 'protractor';

export class AdminPage {
  navigateTo() {
    return browser.get('/admin');
  }

  logout() {
    //element(by.linkText('Logout')).click(); 
    element(by.id('logout')).click();
  }

  getTitleText() {
    return element(by.css('app-admin h1')).getText();
  }

  getRootElement() {
    return element(by.css('app-admin')).isPresent();
  }

  getSuccessMessage() {
    return element(by.css('.alert-success')).getText();
  }
}