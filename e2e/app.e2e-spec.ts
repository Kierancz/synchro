import { SynchroPage } from './app.po';

describe('synchro App', () => {
  let page: SynchroPage;

  beforeEach(() => {
    page = new SynchroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
