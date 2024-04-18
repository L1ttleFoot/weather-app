import {render, screen} from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

describe('all tests', () => {
    test('test input', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('city...');
        expect(input).toBeInTheDocument();
    });

    test('test add card', () => {
        render(<App />);
        //screen.debug()
        const card = screen.getByRole('button', {name: /addCard/i});
        expect(card).toBeInTheDocument();
    });
});
