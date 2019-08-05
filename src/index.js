'use strict';
import {Router} from '@vaadin/router';
import { html, define, render } from 'hybrids';
import { Contents } from './pages/contents.js';



const callback = () => {
  define('app-root', Contents);
 
  const layout = document.getElementById('layout');
  console.log(layout);
  const router = new Router(layout);
  router.setRoutes([
    {path: '/', component: 'app-root'}
  ])

};

if (document.readyState === 'complete' || 
  (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    callback();
  } else {
  document.addEventListener('DOMContentLoaded', callback);
}
