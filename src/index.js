'use strict';
import p5 from 'p5'
import {MDCList} from "@material/list"; 
import {MDCDrawer} from "@material/drawer";

//Force page refresh on hot reload
if (module.hot) {
    module.hot.accept(function () {
        window.location.reload();
    })
}

import Sketch from './sketch';
import { default as sketch2 } from "./sketches/p-1-0";
import {MDCRipple} from '@material/ripple/index';

const callback = () => {
  const listSelect = document.querySelector('.mdc-list');
  const list = MDCList.attachTo(listSelect); 
  list.wrapFocus = true;

  let canvas = new p5(Sketch);
  canvas.remove();
  
  const listChildren = Array.from(listSelect.children);
  listChildren.map((navItem, index) => {
    if (navItem.nodeName === 'A') {
      
      navItem.addEventListener('click', (event) => {
        const target = event.originalTarget.innerText;
        canvas.remove();
        
        switch (target) {
          case 'One':
            canvas.remove();
            canvas = new p5(sketch2);
          case 'Two':
            canvas.remove();
            canvas = new p5(Sketch);
          default: 
            canvas.remove();
            canvas = new p5(Sketch);
        }
      });
    }
  });
}

if (     
  document.readyState === "complete" ||     
  (document.readyState !== "loading" && !document.documentElement.doScroll) ) {   
  callback(); 
} else {   
  document.addEventListener("DOMContentLoaded", callback); 
}

