import { mockedEmployees } from '../../src/__mocks__/mockedEmployees';

describe('Testing employee deletion', () => {
    it('Should delete one employee in the data table', () => {
        // Populate local storage with mocked employees
        localStorage.setItem('employees', JSON.stringify(mockedEmployees));
        cy.visit('/employee-list');

        // Check that employee are displayed
        mockedEmployees.map((employee) => {
            cy.contains(employee.firstName);
            cy.contains(employee.lastName);
            cy.contains(employee.dateOfBirth);
            cy.contains(employee.department);
            cy.contains(employee.street);
        });

        // Delete one employee
        cy.contains(mockedEmployees[0].firstName).click();
        cy.contains('DELETE SELECTED EMPLOYEE').click();
        cy.contains('DELETE EMPLOYEE').click();

        // Check that the number of employee has been decremented
        // and that the deleted employee is not present on the page anymore
        cy.get('.p-datatable-tbody')
            .children()
            .should('have.length', mockedEmployees.length - 1);
        cy.contains(mockedEmployees[0].firstName).should('not.exist');
    });

    it('Should delete several employees in the data table', () => {
        // Populate local storage with mocked employees
        localStorage.setItem('employees', JSON.stringify(mockedEmployees));
        cy.visit('/employee-list');

        // Check that employee are displayed
        mockedEmployees.map((employee) => {
            cy.contains(employee.firstName);
            cy.contains(employee.lastName);
            cy.contains(employee.dateOfBirth);
            cy.contains(employee.department);
            cy.contains(employee.street);
        });

        // Delete two employees
        cy.contains(mockedEmployees[0].firstName).click();
        cy.contains(mockedEmployees[1].firstName).click();
        cy.contains('DELETE SELECTED EMPLOYEES').click();
        cy.contains('DELETE EMPLOYEES').click();

        // Check that the number of employee has been subtracted by 2
        // and that the deleted employees are not present on the page anymore
        cy.get('.p-datatable-tbody')
            .children()
            .should('have.length', mockedEmployees.length - 2);
        cy.contains(mockedEmployees[0].firstName).should('not.exist');
        cy.contains(mockedEmployees[1].firstName).should('not.exist');
    });
});
