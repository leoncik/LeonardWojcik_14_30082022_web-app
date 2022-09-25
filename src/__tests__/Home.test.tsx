import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../pages/Home/Home';

describe('Testing render of home page', () => {
    it('should display the form to create an employee', () => {
        render(<Home />);
        const firstNameLabel = screen.getByText('First Name');
        const lastNameLabel = screen.getByText('Last Name');
        const dateOfBirthLabel = screen.getByText('Date of Birth');
        const saveButton = screen.getByText('Save');
        expect(firstNameLabel).toBeDefined;
        expect(lastNameLabel).toBeDefined;
        expect(dateOfBirthLabel).toBeDefined;
        expect(saveButton).toBeDefined;
    });
});
