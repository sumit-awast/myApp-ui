import React from 'react';
import { render,screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('HelloWorld component', () => {
    it('renders without crashing', () => {
        render(<HelloWorld />);
        const helloWorldText = screen.getByText('Hello World');
        expect(helloWorldText).toBeInTheDocument();
    });
});
