'use strict';

const Sketch = (p) => {
  let segmentCount = 360;
  let radius = 300;
  
  p.setup = () => {
    p.createCanvas(800, 800);
    p.noStroke();
    p.colorMode(p.HSB, 360, p.width, p.height);
  };
  
  p.draw = () => {
    p.background(360, 0, p.height);
    const angleStep = 360 / segmentCount;

    const drawGrid = (gridX, gridY, stepX, stepY) => {
    };

    const drawShape = (angle) => {
      if(angle > 360) {
        return;
      }
      const vx = p.width / 2 + p.cos(p.radians(angle)) * radius;
      const vy = p.height / 2 + p.sin(p.radians(angle)) * radius;
      p.vertex(vx, vy);
      p.fill(angle, p.mouseX, p.mouseY);
      drawShape(angle + angleStep)
    }

    p.beginShape(p.TRIANGLE_FAN);
      p.vertex(p.width / 2, p.height / 2);
      drawShape(0);
    p.endShape();
  };

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') saveCanvas(gd.timestamp(), 'png');

    switch (p.key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 45;
      break;
    case '3':
      segmentCount = 24;
      break;
    case '4':
      segmentCount = 12;
      break;
    case '5':
      segmentCount = 6;
      break;
    }
  }
};

export default Sketch;
