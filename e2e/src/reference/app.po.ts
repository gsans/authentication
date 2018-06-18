import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo(url) {
    return browser.get(url);
  }

  /* Browser Commands */
  getTitle() {
    return browser.getTitle();
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  /* DOM Helpers */
  getHeadline() {
    return element.all(by.css('.text-container .text-headline')).first();
  }

  getHeadlines() {
    return element.all(by.css('.text-container .text-headline'));
  }

  /* Locators */
  enterSearch(query: string) {
    const input = element(by.css('.search-container input[type=search]'));
    input.clear();
    input.sendKeys(query);
  }

  getSearchResults() {
    const results = element.all(by.css('.search-results li'));
    browser.wait(ExpectedConditions.presenceOf(results.first()), 8000);
    return results.map(link => link && link.getText());
  }

  navigateToResult(query: string) {
    const results = element.all(by.css(`.search-results li a[href*=${query}]`))
    browser.wait(ExpectedConditions.presenceOf(results.first()), 8000);
    results.first().click();
  }

  getDocsTitle() {
    return element(by.css('header h1')).getText();
  }
}