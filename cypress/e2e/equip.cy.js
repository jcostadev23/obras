describe('template spec', () => {
    it('passes', () => {

        const randomEquip = 'Hitachi ' + Math.floor(Math.random() * 10)
        const randomAttachements = 'Buckets' + Math.floor(Math.random() * 10)

        cy.visit('http://localhost:3000')
        //Move to Equipement page and Create Equipement

        cy.get('[data-testid="amplify-menu-trigger-test-id"]').click()

        cy.contains('Equipements').click()

        cy.contains('Create Equipements').click()

        // Enter values into the form fields
        cy.get('body').click();
        cy.get(':nth-child(1) > .amplify-label').click()
            .type(randomEquip);
        cy.get(':nth-child(2) > .amplify-label').click()
            .type(randomAttachements);

        // Click the submit button
        cy.get('[type="submit"]').click();

        // Verify that the new Equipement was created successfully
        cy.url().should('contain', '/equipements')
        cy.contains(randomEquip).should('exist')

    })
})