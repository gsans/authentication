import { HomePage } from './home.po';

describe('Home page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display home', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Home');
  });
});