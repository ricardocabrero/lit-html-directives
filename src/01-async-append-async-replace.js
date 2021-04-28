import { html, render } from '../node_modules/lit-html/lit-html.js';
import { asyncReplace } from '../node_modules/lit-html/directives/async-replace.js';
import { asyncAppend } from '../node_modules/lit-html/directives/async-append.js';

const wait = (t) => new Promise((resolve) => setTimeout(resolve, t));
/**
 * Returns an async iterable that yields increasing integers.
 */
async function* countUp() {
  let i = 0;
  while (true) {
    yield i++;
    await wait(1000);
  }
}

async function fetchApi(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return data[0].name;
};

// fetchApi()
//     .then(res => console.log(res))

render(asyncReplace(countUp()), document.querySelector('.counter'));
render(asyncAppend(fetchApi()), document.querySelector('.fetch'));


