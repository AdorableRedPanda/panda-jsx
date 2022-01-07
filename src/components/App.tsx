/** @jsx createElement */
import { createElement, FC } from '../JSX';

export const App: FC = ({ children }) => (
    <div className="app-classname" style={{ color: '#2a1452', fontSize: 'xx-large', textDecoration: 'underline' }}>
        Hello world
        {children}
    </div>
);