import { DiPage } from './app.po';

describe('di App', () => {
  let page: DiPage;

  beforeEach(() => {
    page = new DiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
