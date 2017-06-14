import { Ng2MaterialStarterPage } from './app.po';

describe('ng2-material-starter App', () => {
  let page: Ng2MaterialStarterPage;

  beforeEach(() => {
    page = new Ng2MaterialStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
