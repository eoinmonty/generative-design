'use strict';

const Sketch = (p) => {
    let stepX, stepY;
    p.setup = () => {
      p.createCanvas(800, 400);
      p.noStroke();
      p.colorMode(p.HSB, p.width, p.height, 100);
    };
    p.draw = () => {
      stepX = p.mouseX + 2;
      stepY = p.mouseY + 2;
      
      for (let gridY = 0; gridY < p.height; gridY += stepY) {
        for (let gridX = 0; gridX < p.width; gridX += stepX) {
          p.fill(gridX, p.height - gridY, 100);
          p.rect(gridX, gridY, stepX, stepY);
        }
      }

    };
};

export default Sketch;
