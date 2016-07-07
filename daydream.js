class DayDream {
  constructor() {
    this.webview = document.getElementById('webview');
  }

  click(selector) {
    let code = `
      $('${selector}')[0].click();
    `;
    this.webview.executeJavaScript(code, false, (result)=> {});
  }

  wait(ms) {
    setTimeout(function () {
      return;
    }, ms);
  }

  waitExecute(ms, func) {
    setTimeout(func, ms);
  }

  goto(url) {
    this.webview.loadURL(url);
  }

  back() {
    if(this.webview.canGoBack()) {
      this.webview.goBack();
    }
  }

  forward() {
    if(this.webview.canGoForward()) {
      this.webview.goForward();
    }
  }

  refresh() {
    this.webview.reload();
  }

  screenshot() {
    // send IPC to main to take screenshot
  }

  clearHistroy() {
    this.webview.clearHistroy();
  }

  setUserAgent(useragent) {
    this.webview.setUserAgent(useragent);
  }

  getUserAgent() {
    return this.webview.getUserAgent();
  }

  insertCSS(css) {
    this.webview.insertCSS(css);
  }

  evaluate(code, handle) {
    this.webview.executeJavaScript(code, false, handle);
  }

  on(event, func) {
    this.webview.addEventListener(event, func);
  }
}
