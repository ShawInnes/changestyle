export class ChangestylePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('changestyle-app p')).getText();
  }
}
