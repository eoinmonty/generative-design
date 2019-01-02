const drawGrid = (gridX, gridY, rowParams, rowParamsTrans, nextRow, exitRule, drawRow) => {

  drawRow(gridX, gridY, rowParams);
  if(exitRule(gridY)) {
    return;
  }

  if(nextRow(gridX)) {
    return drawGrid(
      0, 
      gridY + 1, 
      rowParamsTrans(rowParams, {gridY: gridY}),
      rowParamsTrans,
      nextRow, 
      exitRule,
      drawRow); 
  }

  return drawGrid(
    gridX + 1, gridY, 
    rowParams, rowParamsTrans, 
    nextRow, exitRule, drawRow);
};

const fullExitRule = (exitValue, posY) => (posY > exitValue);
const exitRule = (exitValue) => (posY) => fullExitRule(exitValue, posY);

const fullNextRow = (nextRowValue, posX) => (posX >=  nextRowValue);
const nextRow = (nextRowValue) => (posX) => fullNextRow(nextRowValue, posX);

export { drawGrid, exitRule, nextRow }
