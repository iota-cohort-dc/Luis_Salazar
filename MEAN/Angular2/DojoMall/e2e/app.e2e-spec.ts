import { DojoMallPage } from './app.po';

describe('dojo-mall App', () => {
  let page: DojoMallPage;

  beforeEach(() => {
    page = new DojoMallPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
