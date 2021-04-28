import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';

const styles = {
    display: 'inline-block',
    color: '#ccc',
    border: '1px solid #666',
    padding: '4px',
    borderRadius: '3px',
    background: '#666',
}

const Template = (text) => html`<span style=${styleMap(styles)}>${text}</span>`;

render(Template('styled'), document.querySelector('.style-map'))