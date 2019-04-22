'use strict';

const Sketch_1_0_All = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(720, 720);
    canvas.parent('layout');
    p.noCursor();
    p.colorMode(p.HSB, 360, 100, 100);
    p.rectMode(p.CENTER);
    p.noStroke();
  };

  p.draw = () => {
    p.background(p.mouseY / 2, p.mouseY / 2, p.mouseY / 2);
    p.fill(360 - p.mouseY / 2, 360 - p.mouseY / 2, 360 - p.mouseY / 2);
    p.rect(360, 360, p.mouseX + 1, p.mouseX + 1);
  };
};

const Sketch_1_0_Bright = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(720, 720);
    canvas.parent('layout');
    p.noCursor();
    p.colorMode(p.HSB, 360, 100, 100);
    p.rectMode(p.CENTER);
    p.noStroke();
  };
  p.draw = () => {
    p.background(100, 100, p.mouseY / 2);
    p.fill(100, 100, 360 - p.mouseY / 2);
    p.rect(360, 360, p.mouseX + 1, p.mouseX + 1);
  };
};


export { 
  Sketch_1_0_All,
  Sketch_1_0_Bright
}
