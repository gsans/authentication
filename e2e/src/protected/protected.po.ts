import { browser, by, element, ExpectedConditions } from 'protractor';

export class ProtectedPage {
  navigateTo() {
    return browser.get('/protected');
  }

  logout() {
    //element(by.linkText('Logout')).click(); 
    element(by.id('logout')).click();
  }

  getTitleText() {
    return element(by.css('app-protected h1')).getText();
  }

  getRootElement() {
    return element(by.css('app-protected')).isPresent();
  }
}