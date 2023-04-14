describe('template spec', () => {
    it('passes', () => {
        const randompeople = ' Costa ' + Math.floor(Math.random() * 20)
        const randomphonenumber = '0770034435' + Math.floor(Math.random() * 20)
        const randomrole = 'Leader' + Math.floor(Math.random() * 20)


        cy.visit('http://localhost:3000')

        // Moving to page people
        cy.get('[data-testid="amplify-menu-trigger-test-id"]').click()


        cy.contains('People').click()


        cy.contains("Create people").click()

        // Enter values into the form fields
        cy.get('body').click()
        cy.get(':nth-child(1) > .amplify-label').click()
            .type(randompeople);
        cy.get(':nth-child(2) > .amplify-label').click()
            .type(randomphonenumber);
        cy.get(':nth-child(3) > .amplify-label').click()
            .type(randomrole);

        // Click the submit button
        cy.get('[type="submit"]').click();

        // Verify that the new person was created successfully
        cy.url().should('contain', '/people')
        cy.contains(randompeople).should('exist')

    })
})