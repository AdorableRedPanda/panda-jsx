/** @jsx createElement */
import { createElement } from './JSX';

(() => {
    const jsx = (
        <>
            <p className="hi_2">hi 2</p>
            <p className="hi_3">hi 3</p>
            <p className="hi_4">hi 4</p>
        </>
    );

    console.log('JSX', jsx);
})();