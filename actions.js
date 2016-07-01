function click(webview, selector) {
  let code = `
  let element = document.getElementById(selector);
  element.click(); `;

  webview.executeJavascript(code, false, (result)=> {
    console.log(result);
  });
}

function wait(webview, selector) {
  let code = `
  if(typeof input === 'number') {
    // wait ms
  } else if(typeof input === 'string') {
    // selector
  } else {
    // error
  } `;

  webview.executeJavascript(code, false, (result)=> {
    console.log(result);
  });
}
