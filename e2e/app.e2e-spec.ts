import { SeasonalJpopAppPage } from './app.po';

describe('seasonal-jpop-app App', () => {
  let page: SeasonalJpopAppPage;

  beforeEach(() => {
    page = new SeasonalJpopAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
