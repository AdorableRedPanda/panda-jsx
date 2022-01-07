import { render } from './Render';
import { App } from './components/App';

/** @jsx createElement */
import { createElement } from './JSX';

const $root = document.getElementById('root');
render(<App />, $root);