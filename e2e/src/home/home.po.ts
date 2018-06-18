import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home'); 
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getRootElement() {
    return element(by.tagName('app-home')).isPresent();
  }
}