import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('Renders heading', () => {
    // Arrange
    render(<App />, { wrapper: BrowserRouter });

    // Assert
    expect(screen.getByRole('banner').textContent).toContain('Lay-Z-Spa Module');
});
