import { ChangestylePage } from './app.po';

describe('changestyle App', function() {
  let page: ChangestylePage;

  beforeEach(() => {
    page = new ChangestylePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('changestyle Works!');
  });
});
