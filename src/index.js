'use strict';
import {Router} from '@vaadin/router';
import { html, define, render } from 'hybrids';
import { Contents } from './pages/contents.js';
import { Color } from './pages/color.js';



const callback = () => {
 
  const layout = document.getElementById('layout');
  const router = new Router(layout);
  router.setRoutes([
    {path: '/', component: 'app-root'},
    {path: '/color', component: 'app-color'}
  ])

};

if (document.readyState === 'complete' || 
  (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    callback();
  } else {
  document.addEventListener('DOMContentLoaded', callback);
}
