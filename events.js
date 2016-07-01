function eventListeners() {
  webview.addEventListener('load-commit', (event)=> {
    console.log(event.url);
    console.log(event.isMainFrame);
  });

  webview.addEventListener('did-finish-load', ()=> {
    console.log('finished loading');
  });

  webview.addEventListener('did-fail-load', ()=> {
    console.log('failed loading');
  });

  webview.addEventListener('did-frame-finish-load', (event)=> {
    console.log(event.isMainFrame);
  });

  webview.addEventListener('did-start-loading', ()=> {
    console.log('start loading');
  });

  webview.addEventListener('did-stop-loading', ()=> {
    console.log('stopped loading');
  });

  webview.addEventListener('did-get-response-details', (event)=> {
      console.log('did get response details');
  });

  webview.addEventListener('did-get-redirect-request', (event)=> {
    console.log(event.oldURL);
    console.log(event.newURL);
    console.log(event.isMainFrame);
  });

  webview.addEventListener('dom-ready', ()=> {
    console.log('DOM is ready');
  });

  webview.addEventListener('console-message', (event)=> {
    console.log(event.level);
    console.log(event.message);
    console.log(event.line);
    console.log(event.sourceId);
  });

  webview.addEventListener('new-window', (event)=> {
    console.log('new window');
    console.log(event.url);
  });

  const navigation = (event)=> {
    console.log(event.url);
  };

  webview.addEventListener('will-navigate', navigation);
  webview.addEventListener('did-navigate', navigation);
  webview.addEventListener('did-navigate-in-page', navigation);

  webview.addEventListener('close', ()=> {
    console.log('close');
  });

  webview.addEventListener('crashed', ()=> {
    console.log('crashed');
  });

  webview.addEventListener('gpu-crashed', ()=> {
    console.log('gpu crashed');
  });

  webview.addEventListener('destroyed', ()=> {
    console.log('destroyed');
  });

  webview.addEventListener('media-started-playing', ()=> {
    console.log('media started playing');
  });

  webview.addEventListener('did-stop-loading', ()=> {
    console.log('did stop loading');
  });
}
