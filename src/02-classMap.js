import { html, render } from '../node_modules/lit-html/lit-html.js';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';

const classes = {
    class01: false,
    class02: true,
    class03: false,
};

let text = 'active';

const Template = (classes) => {
    return html`<p class="${classMap(classes)}">classes ${text}&nbsp;${JSON.stringify(classes)}</p>
    <button @click=${handleClick}>click me!</button>`
}

function handleClick() {
    classes.class01 = !classes.class01;
    classes.class02 = !classes.class02;
    classes.class03 = !classes.class03;
    text === 'active' ? text = 'inactive' : text = 'active';

    renderHtml(classes);
}

function renderHtml(classes) {

    render(Template(classes), document.querySelector('.class-map'));
}

renderHtml(classes);
