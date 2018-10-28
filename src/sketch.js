'use strict';

const Sketch = (p) => {
    p.setup = () => {
      p.createCanvas(720, 720);
      p.noCursor();
      p.colorMode(p.HSB, 360, 100, 100);
      p.rectMode(p.CENTER);
      p.noStroke();
    };
    p.draw = () => {
      p.background(100, p.mouseY / 2 , 100);
      p.fill(100, 360 - p.mouseY / 2, 100);
      p.rect(360, 360, p.mouseX + 1, p.mouseX + 1);
    };
};

export default Sketch;
