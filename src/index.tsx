/** @jsxFrag 'FRAGMENT' */
/** @jsx createJSXNode */
import { createJSXNode } from './JSX';

const ListElement = (props: {record: Record<string, string>}) => {
    console.log(props);
    return (
        <>
            {null}
            <p className="hi_2">hi 2</p>
            <p className="hi_3">hi 3</p>
            <p className="hi_4">hi 4</p>
        </>
    );
};

(() => {
    const jsx = (
        <div className="parent_obj" style={{ color: 'red' }}>
            <h1 className="hi_there">hi there</h1>
            <>
                {null}
                <p className="hi_2">hi 2</p>
                <p className="hi_3">hi 3</p>
                <p className="hi_4">hi 4</p>
                <ListElement record={{ hi: 'there' }}/>
            </>
            <span>{null}</span>
        </div>
    );

    console.log('JSX', jsx);
})();