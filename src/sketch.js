'use strict';

const Sketch = (p) => {

  const randomColor = () => {
    return {
      left: p.color(p.random(0, 60), p.random(0, 100), 100),
      right: p.color(p.random(160, 190), 100, p.random(0, 100))
    };
  };

  const randomColors = (tileCountY) => {
    const colors =  Array(tileCountY).fill(0);
    const randColorsList = colors.map(randomColor);
    return randColorsList;
  }
  
  let colors = randomColors(100);
  let interpolateShortest = false;

  p.setup = () => {
    p.createCanvas(800, 800);
    p.noStroke();
  };

  p.draw = () => {
    (!interpolateShortest) ? p.colorMode(p.HSB) : p.colorMode(p.RGB);
    const tileCountX = p.int(p.map(p.mouseX, 0, p.width, 2, 100));
    const tileCountY = p.int(p.map(p.mouseY, 0, p.height, 2, 10));
    const tileWidth = p.width/tileCountX;
    const tileHeight = p.height/tileCountY;
    
    const drawRow = (gridX, gridY, col1, col2) => {
      const amount = p.map(gridX, 0, tileCountX - 1, 0, 1);
      const interCol = p.lerpColor(col1, col2, amount);
      
      p.fill(interCol);
      const posX = tileWidth * gridX;
      const posY = tileHeight * gridY;
      p.rect(posX, posY, tileWidth, tileHeight);
    }

    const drawGrid = (gridX, gridY, col1, col2) => {

      drawRow(gridX, gridY, col1, col2);
      if(gridY > tileCountY) {
        return;
      }

      if(gridX >= tileCountX) {
        return drawGrid(0, gridY + 1, colors[gridY + 1].left, colors[gridY + 1].right); 
      }

      return drawGrid(gridX + 1, gridY, col1, col2);
    };

    const col1 = colors[0].left;
    const col2 = colors[0].right;
    drawGrid(0, 0, col1, col2);
  };

  p.mouseReleased = () => {
    colors = randomColors(100);
  }

  p.keyPressed = () => {
    if (p.key == '1') interpolateShortest = true; 
    if (p.key == '2') interpolateShortest = false; 
  }
};

export default Sketch;
