import { AppPage } from './app.po';

describe('Using browser object', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to url (https://angular.io)', () => {
    page.navigateTo('https://angular.io');
    expect(page.getTitle()).toBe('Angular');
    expect(page.getCurrentUrl()).toBe('https://angular.io/');
  })
})
