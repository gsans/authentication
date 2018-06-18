import { AppPage } from './app.po';
import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';

describe("Locators", () => {
  let page: AppPage;

  describe('Searches', () => {  
    beforeEach(async () => {
      page = new AppPage();
      page.navigateTo('https://angular.io/');
    });
  
    it('should show results for exact match: ngModule', () => {
      const query = 'ngModule';
      page.enterSearch(query);
      page.getSearchResults().then(results => {
        expect(results.length).toBe(61);
        expect(results.includes('NgModule'));
      })
      expect(page.getSearchResults()).toContain('NgModule');
    })

    it('should show results for partial match: ngMod', () => {
      const query = 'ngMod';
      page.enterSearch(query);
      page.getSearchResults().then(results => {
        expect(results.length).toBe(18);
        expect(results.includes('NgModule'));
      })
      expect(page.getSearchResults()).toContain('NgModule');
    })

    it('should navigate to page details on click', () => {
      const query = 'ngModule';
      page.enterSearch(query);
      page.navigateToResult('NgModule');
      expect(page.getDocsTitle()).toBe('NgModule');
    })
  })

})

