'use strict';

const Sketch = (p) => {
    let stepX, stepY = 0;
    p.setup = () => {
      p.createCanvas(800, 400);
      p.noStroke();
      p.colorMode(p.HSB, p.width, p.height, 100);
    };
    p.draw = () => {
      stepX = p.mouseX + 10;
      stepY = p.mouseY + 10;

      const drawGrid = (gridX, gridY, stepX, stepY) => {
          p.fill(gridX, p.height - gridY, 100);
          p.rect(gridX, gridY, stepX, stepY);
      };

      const drawGridX = (gridX, gridY, stepX, stepY) => {
        drawGrid(gridX, gridY, stepX, stepY);
        if(gridY > p.height) {
          return;
        }
        if(gridX > p.width) {
          return drawGridX(0, gridY + stepY, stepX, stepY);
        }
        return drawGridX(gridX + stepX, gridY, stepX, stepY);
      }
      drawGridX(0, 0, stepX, stepY);
    };
};

export default Sketch;
