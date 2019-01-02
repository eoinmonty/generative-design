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
import {MDCRipple} from '@material/ripple/index';

const callback = () => {
  new p5(Sketch);
  const list = MDCList.attachTo(document.querySelector('.mdc-list')); 
  list.wrapFocus = true;
}

if (     
  document.readyState === "complete" ||     
  (document.readyState !== "loading" && !document.documentElement.doScroll) ) {   
  callback(); 
} else {   
  document.addEventListener("DOMContentLoaded", callback); 
}

