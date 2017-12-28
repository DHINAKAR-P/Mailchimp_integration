import { CodebasePage } from './app.po';

describe('codebase App', () => {
  let page: CodebasePage;

  beforeEach(() => {
    page = new CodebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
