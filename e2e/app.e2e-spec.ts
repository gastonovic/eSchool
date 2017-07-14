import { Stage2017Page } from './app.po';

describe('stage2017 App', () => {
  let page: Stage2017Page;

  beforeEach(() => {
    page = new Stage2017Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
