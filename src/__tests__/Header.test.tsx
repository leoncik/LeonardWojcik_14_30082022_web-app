import { render } from './customRender';
import { screen } from '@testing-library/react';

import { describe, it, expect } from 'vitest';
import Header from '../components/layout/Header/Header';

describe('Testing render of main header', () => {
    it('should display the two navigation links', () => {
        render(<Header />);
        const firstLink = screen.getByText('HRnet');
        const secondLink = screen.getByText('Employee list');
        expect(firstLink).toBeDefined;
        expect(secondLink).toBeDefined;
    });
});
