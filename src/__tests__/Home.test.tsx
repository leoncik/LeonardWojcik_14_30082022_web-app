import { render } from './customRender';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../pages/Home/Home';

// Use 'resize-observer-polyfill' to fix 'ResizeObserver is not defined'.
// Note : the ResizeObserver API is used in the custom select menu.
global.ResizeObserver = require('resize-observer-polyfill');

describe('Testing render of home page', () => {
    it('should display the form to create an employee', () => {
        render(<Home />);
        const firstNameLabel = screen.getByText('First Name');
        const lastNameLabel = screen.getByText('Last Name');
        const dateOfBirthLabel = screen.getByText('Date of Birth');
        const saveButton = screen.getByText('SAVE EMPLOYEE');
        expect(firstNameLabel).toBeDefined;
        expect(lastNameLabel).toBeDefined;
        expect(dateOfBirthLabel).toBeDefined;
        expect(saveButton).toBeDefined;
    });
});
