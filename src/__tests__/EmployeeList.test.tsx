import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EmployeeList from '../pages/EmployeeList/EmployeeList';

describe('Testing render of the employee list page', () => {
    it('should display a table and a button to delete employees', () => {
        render(<EmployeeList />);
        const tableHeader = screen.getByText('Current Employees');
        const deleteButton = screen.getByText('DELETE SELECTED EMPLOYEE');
        expect(tableHeader).toBeDefined;
        expect(deleteButton).toBeDefined;
    });
});
