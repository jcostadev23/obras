describe('template spec', () => {
    it('passes', () => {
        const vertical = ' Barn ' + Math.floor(Math.random() * 5)
        const horizontal = 'Trinity' + Math.floor(Math.random() * 6)

        cy.visit('http://localhost:3000')

        // Moving to page Job
        cy.get('[data-testid="amplify-menu-trigger-test-id"]').click()


        cy.contains('Create Calendar').click()

        //Fill the form
        cy.get('.rdp-months')
        cy.get(':nth-child(3) > :nth-child(2) > .rdp-button_reset')
        cy.get('body')
        cy.get('#amplify-id-\:rm\:').click()
            .parent()
            .find('input[type=checkbox]')
            .check('3')

    })
})