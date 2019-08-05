import { html, define, render } from 'hybrids';

const template = document.createElement('template');
template.innerHTML = `
<style>
  .nav-wrapper {
    background-color: red;
    height: 100%; 
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    margin-top: -2rem;
    font-family: 'Montserrat', sans-serif; 
    font-size: 3rem;
  }
</style>
<div class="nav-wrapper">
  <h1>Color</h1>
  <slot></slot>
</div>
`


class NavBox extends HTMLElement {

  constructor() {
    super(); 
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('nav-box', NavBox);
