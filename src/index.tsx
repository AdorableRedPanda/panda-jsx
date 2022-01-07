/** @jsx createElement */
import { FC, createElement } from './JSX';

interface Props {
    record: Record<string, string>
}

const CustomComponent: FC<Props> = ({ record, children }) => (
    <div>
        {Object.entries(record).map(([key, value]) => <p className="key">`${key}: ${value}`</p>)}
        {children}
    </div>
);

(() => {
    const jsx = (
        <>
            <p className="hi_2">hi 2</p>
            <p className="hi_3">hi 3</p>
            <CustomComponent record={{ hi: 'there' }}>
                <p className="hi_4">hi 4</p>
            </CustomComponent>
        </>
    );

    console.log('JSX', jsx);
})();