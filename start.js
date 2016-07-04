function start(config) {
  const webview = document.getElementById('webview');

  webview.loadURL(`${config.host}/slideshow/${config.itemid}/?layoutmode=${config.layoutMode}`);

  click(webview, '.x-text');

  //eventListeners();
}

function click(webview, selector) {
  let code = `
  let element = document.getElementById(${selector});
  element.click(); `;

  webview.executeJavaScript(code, false, (result)=> {
    console.log(result);
  });
}
