function start(config) {
  const webview = document.getElementById('webview');

  webview.loadURL(`${config.host}/slideshow/${config.itemid}/?layoutmode=${config.layoutMode}`);

  click(webview, '.x-text');

  //eventListeners();
}
