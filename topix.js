require(path.resolve(__dirname, 'daydream.js'));

class Topix extends DayDream {
  constructor(config) {
    super();
    this.config = config;
    this.screenshotsFileName = `screenshots/${this.config.host}-${this.config.itemid}-${count}.png`;
  }

  loopThroughSlides() {
    var count = 1;
    while(count <= this.config.slides) {
      if(count === 1) {
        super.wait(this.config.waitBetweenSlides)
        super.click('.x-text')
        super.wait(this.config.waitBetweenSlides);
        if(this.config.screenshots) super.screenshot(this.screenshotsFileName);
      } else {
        super.click('.js-next')
        super.wait(this.config.waitBetweenSlides);
        if(this.config.screenshots) super.screenshot(this.screenshotsFileName);
      }
      count++;
    }
  }

  evaluateElement(count) {
    if(count % === 2) { // if on caption
      let code = `return document.querySelector('.x-slide-subcaption').innerText;`;
      super.evaluate(code, function(result) {
        console.log(result);
      });
    } else { // if on image
      let code = `return document.querySelector('.js-slide-image').src;`;
      super.evalute(code, function(result) {
        console.log(result);
      })
    }
  }
}
