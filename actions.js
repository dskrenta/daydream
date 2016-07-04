function click(webview, selector) {
  let code = `document.getElementById(${selector}).click();`;

  webview.executeJavaScript(code, false, (result)=> {
    console.log(result);
  });
}

function wait(webview, selector) {
  let code = `
  if(typeof ${input} === 'number') {
    // wait ms
  } else if(typeof ${input} === 'string') {
    // selector
  } else {
    // error
  } `;

  webview.executeJavaScript(code, false, (result)=> {
    console.log(result);
  });
}
