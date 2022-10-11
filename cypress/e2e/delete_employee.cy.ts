import { mockedEmployees } from '../../src/__mocks__/mockedEmployees';

describe('Testing employee deletion', () => {
    beforeEach(() => {
        // Create employees
        cy.visit('/');
        mockedEmployees.map((employee) => {
            // Fill form
            cy.get('.first-name').then((elem) => {
                elem.val(employee.firstName);
            });
            cy.get('.last-name').then((elem) => {
                elem.val(employee.lastName);
            });
            cy.get('#start-date').then((elem) => {
                elem.val(employee.startDate);
            });
            cy.get('#city').then((elem) => {
                elem.val(employee.city);
            });
            // Submit the form
            cy.contains('SAVE EMPLOYEE').click();
            // Check modal and close It.
            cy.get('.p-dialog-content').should('contain', 'Employee Created!');
            cy.get('.p-dialog-header-icon').click();
        });

        // Going to employee page
        cy.contains('Employee list').click();
        cy.url().should('include', '/employee-list');
    });

    it('Should delete one employee in the data table', () => {
        // Check that employee are displayed
        mockedEmployees.map((employee) => {
            cy.contains(employee.firstName);
            cy.contains(employee.lastName);
            cy.contains(employee.startDate);
            cy.contains(employee.city);
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
        // Check that employee are displayed
        mockedEmployees.map((employee) => {
            cy.contains(employee.firstName);
            cy.contains(employee.lastName);
            cy.contains(employee.startDate);
            cy.contains(employee.city);
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
