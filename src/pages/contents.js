import { html, define, render } from 'hybrids';
import styleTest from '../pages/contents.css';

console.log(styleTest);

export const Contents = {
  render:
  () => 
    html`     
    <button class="test">
      test
    </button>
    <a class="test" href="/color">color</a>
    `.style(styleTest),
};
define('app-root', Contents);

