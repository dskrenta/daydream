function click(webview, selector) {
  let code = `document.querySelector('${selector}').click();`;
  webview.executeJavaScript(code, false, (result)=> {});
}

function wait(ms) {
  setTimeout(function() {}, ms);
}

function log(message) {
  let code = `console.log('${message}');`;
  webview.executeJavaScript(code, false, (result)=> {});
}
