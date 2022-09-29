import { mockedEmployees } from '../../src/__mocks__/mockedEmployees';

describe('empty spec', () => {
    it('passes', () => {
        cy.visit('/');

        // Fill in the required fields of the form
        cy.get('.first-name')
            .type(mockedEmployees[0].firstName)
            .should('have.value', mockedEmployees[0].firstName);

        cy.get('.last-name')
            .type(mockedEmployees[0].lastName)
            .should('have.value', mockedEmployees[0].lastName);

        cy.get('.start-date').click();
        cy.get('.p-datepicker-today').click();
        const today = new Date(Date.now());
        // the .toString().padStart(2, '0')  adds a leading zero if the month or day only contain
        // a single digit (less than 10).
        const formattedToday =
            (today.getMonth() + 1).toString().padStart(2, '0') +
            '/' +
            today.getDate().toString().padStart(2, '0') +
            '/' +
            today.getFullYear();
        cy.get('#start-date').should('have.value', formattedToday);

        // Submit the form
        cy.contains('SAVE EMPLOYEE').click();

        // Check modal and close It.
        cy.get('.p-dialog-content').should('contain', 'Employee Created!');
        cy.get('.p-dialog-header-icon').click();

        // Going to employee page and checking that the employee has been created
        cy.contains('Employee list').click();
        cy.url().should('include', '/employee-list');
        cy.contains(mockedEmployees[0].firstName);
        cy.contains(mockedEmployees[0].lastName);
        cy.contains(formattedToday);
    });
});
