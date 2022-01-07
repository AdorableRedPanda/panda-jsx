/** @jsx createElement */
import { createElement, FC } from '../JSX';

interface Props {
    record: Record<string, string>
}

const CustomComponent: FC<Props> = ({ record, children }) => (
    <div>
        {Object.entries(record).map(([key, value]) => <p className="key">{`${key}: ${value}`}</p>)}
        {children}
    </div>
);

const CustomComponent2: FC = ({ children }) => (
    <div>
        <h6>hi from h6</h6>
        {children}
    </div>
);
export const App = () => (
    <>
        <CustomComponent2>
            <span>hi from span!</span>
        </CustomComponent2>
        <CustomComponent record={{ hi: 'there' }}>
            <p className="hi_1">hi 1</p>
        </CustomComponent>
    </>
);