import { html, render } from '../node_modules/lit-html/lit-html.js';
import { unsafeHTML } from '../node_modules/lit-html/directives/unsafe-html.js';

const htmlTemp = `"<strong>this text hasn\'t html method</strong>"`;

const template = html`this text paraph ${unsafeHTML(htmlTemp)}`;

render(template, document.querySelector('.unsafe-html'));