import { AppPage } from './app.po';
import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';

describe("DOM helpers", () => {
  let page: AppPage;
  let headlines = [
    'DEVELOP ACROSS ALL PLATFORMS',
    'SPEED & PERFORMANCE',
    'INCREDIBLE TOOLING',
    'LOVED BY MILLIONS'
  ];
  let h: ElementArrayFinder;
  let headline: ElementFinder;

  describe('Using element.all object', () => {  
    beforeEach(async () => {
      page = new AppPage();
      await page.navigateTo('https://angular.io/');
      h = page.getHeadlines();
    });
  
    it('should work with lists: count, get, first, last', () => {
      expect(h.count()).toBe(4);
      expect(h.get(0).getText()).toBe(headlines[0]);
      expect(h.first().getText()).toBe(headlines[0]);
      expect(h.get(3).getText()).toBe(headlines[3]);
      expect(h.last().getText()).toBe(headlines[3]);
    })
  
    it('should work with lists: count, get, first, last (async/await)', async function() {
      expect(await h.count()).toBe(4);
      expect(await h.get(0).getText()).toBe(headlines[0]);
      expect(await h.first().getText()).toBe(headlines[0]);
      expect(await h.get(3).getText()).toBe(headlines[3]);
      expect(await h.last().getText()).toBe(headlines[3]);
    })
  
    it('should work with lists: each, map', () => {
      expect(h.count()).toBe(4);
      // example using each
      h.each((el, index) => {
        expect(el.getText()).toBe(headlines[index]);
      });
      // example using map
      let list = h.map((el, index) => {
        return el.getText();
      })
      expect(list).toEqual(headlines);
    })
  })
  
  describe('Using element', () => {  
    beforeEach(async () => {
      page = new AppPage();
      await page.navigateTo('https://angular.io/');
      headline = page.getHeadline();
    });
  
    it('should work with single items', () => {
      expect(headline.isPresent()).toBe(true);
      expect(headline.getText()).toBe(headlines[0]);
      expect(headline.getCssValue('text-transform')).toBe('uppercase');
      expect(headline.getCssValue('color')).toBe('rgba(25, 118, 210, 1)');
    })
  })
})

