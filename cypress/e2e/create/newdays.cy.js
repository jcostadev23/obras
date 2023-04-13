describe('template spec', () => {
    it('passes', () => {
        const vertical = ' Barn ' + Math.floor(Math.random() * 5)
        const horizontal = 'Trinity' + Math.floor(Math.random() * 6)

        cy.visit('http://localhost:3000')

        // Moving to page Job
        cy.get('[data-testid="amplify-menu-trigger-test-id"]').click()


        cy.contains('Create Calendar').click()

        //Fill the form
        //Select data
        cy.get(':nth-child(5) > :nth-child(3) > .rdp-button_reset').click()
        // Can't find the key to select the person field
        // cy.get(':nth-child(2) > #amplify-id-\:rm\:')

        // select hours
        cy.get(':nth-child(3) > .amplify-flex > .amplify-field-group__outer-end > .amplify-button').then(($el) => {
            for (let i = 0; i < 5; i++) {
                cy.wrap($el).click()
            }
        })


        cy.get(':nth-child(6) > .amplify-flex > .amplify-field-group__outer-end > .amplify-button').then(($el) => {
            for (let i = 0; i < 7; i++) {
                cy.wrap($el).click()
            }
        })

    })
})