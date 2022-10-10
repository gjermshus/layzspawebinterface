import { fireEvent, render, screen } from '@testing-library/react';
import { ControlWidget } from '../ControlWidget';
import '@testing-library/jest-dom/extend-expect';

describe('ControlWidget', () => {
    it('should render', () => {
        // Arrange
        render(<ControlWidget label="Test" />);

        // Assert
        expect(screen.getByRole('button')).toBeDefined();
    });

    it('should render label', () => {
        // Arrange
        render(<ControlWidget label="Test" />);
        // Assert
        expect(screen.getByText('Test')).toBeDefined();
    });

    it('should render off state', () => {
        // Arrange
        render(<ControlWidget label="Test" />);
        // Assert
        expect(screen.getByText('Off')).toBeDefined();
    });

    it('should render on state', async () => {
        // Arrange
        render(<ControlWidget label="Test" active={true} />);
        // Act
        const button = screen.getByRole('button');
        fireEvent.click(button);
        const result = await screen.findByText('On');
        // Assert
        expect(result).toBeDefined();
    });
});
