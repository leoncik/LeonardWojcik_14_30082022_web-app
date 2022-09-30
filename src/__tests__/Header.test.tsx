import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from '../components/layout/Header/Header';

describe('Testing render of main header', () => {
    it('should display the two navigation links', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const firstLink = screen.getByText('HRnet');
        const secondLink = screen.getByText('Employee list');
        expect(firstLink).toBeDefined;
        expect(secondLink).toBeDefined;
    });
});
