import { html, define, render } from 'hybrids';
import styleTest from '../pages/contents.css';

console.log(styleTest);

export const Contents = {
  render:
  () => 
    html`     
    <style>
      .test { 
        color: red;
        background-color: green;
      }
    </style>
    <button class="test">
      test
    </button>
    <a class="test" href="/color">color</a>
    `
};
define('app-root', Contents);

