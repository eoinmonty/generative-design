'use strict';
import * as R from 'ramda';
import { drawGrid, exitRule, nextRow } from './grid.js';

const Sketch = (p) => {

  const randomColor = () => {
    return {
      left: p.color(p.random(0, 140), p.random(10, 255), p.random(50, 200)),
      right: p.color(p.random(180, 255), p.random(10, 255), p.random(50, 200))
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
    const canvas = p.createCanvas(800, 800);
    canvas.parent('layout')
    p.noStroke();
  };

  p.draw = () => {
    (!interpolateShortest) ? p.colorMode(p.HSB) : p.colorMode(p.RGB);
    
    const drawRow = ( gridX, gridY, rowParams ) => {

      const { tileCountX, tileCountY, tileHeight, tileWidth, col1, col2} = rowParams;
      const amount = p.map(gridX, 0, tileCountX - 1, 0, 1);
      const interCol = p.lerpColor(col1, col2, amount);
      
      p.fill(interCol);
      const posX = tileWidth * gridX;
      const posY = tileHeight * gridY;
      p.rect(posX, posY, tileWidth, tileHeight);
    }

    const tileCountX = p.int(p.map(p.mouseX, 0, p.width, 2, 100));
    const tileCountY = p.int(p.map(p.mouseY, 0, p.height, 2, 10));
    const rowParams = {
      col1: colors[0].left,
      col2: colors[0].right,
      colors: colors,
      tileWidth: p.width/tileCountX,
      tileHeight: p.height/tileCountY,
      tileCountX,
      tileCountY
    };
   
    const exit = exitRule(tileCountY);
    const moveRow = nextRow(tileCountX); 

    const rowParamsTrans = (rowParams, { gridY }) => {
      return R.assoc('col2',  rowParams.colors[gridY + 1].right, 
              R.assoc('col1', rowParams.colors[gridY + 1].left, rowParams));
    };

    drawGrid(0, 0, rowParams, rowParamsTrans, moveRow, exit, drawRow);
  };

  p.mouseReleased = () => {
    colors = randomColors(100);
  }

  p.keyPressed = () => {
    if (p.key == '1') interpolateShortest = true; 
    if (p.key == '2') interpolateShortest = false; 
    if (p.key == '3') colors = randomColors(100);
  }
};

export default Sketch;
