function start(config) {
  const webview = document.getElementById('webview');

  webview.loadURL(`${config.host}/slideshow/${config.itemid}/?layoutmode=${config.layoutMode}`);

  click(webview, '.x-text');
  console.log(webview.isWaitingForResponse());
  log('I am here!');
  wait(5000);
  log('I am here! 2');
  click(webview, '.x-next');
  wait(5000);
  log('message test');

  //eventListeners();
}
