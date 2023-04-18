describe('template spec', () => {
    it('passes', () => {
        const vertical = ' Barn ' + Math.floor(Math.random() * 5)
        const horizontal = 'Trinity' + Math.floor(Math.random() * 6)

        cy.visit('http://localhost:3000')

        // Moving to page create calendar
        cy.get('[data-testid="amplify-menu-trigger-test-id"]').click()


        cy.contains('Create Calendar').click()

        //Fill the form
        //Select data
        cy.get(':nth-child(5) > :nth-child(3) > .rdp-button_reset').click()
        // Can't find the key to select the person field
        cy.get('[data-cy="Select a People"]')
            .select("Costa 9")


        // select hours
        cy.get(':nth-child(3) > .amplify-flex > .amplify-field-group__outer-end > .amplify-button').then(($el) => {
            for (let i = 0; i < 5; i++) {
                cy.wrap($el).click()
            }
        })

        // TextAreaField
        cy.get('[data-cy="TextAreaField"]').type("its just a test from cypress")


        cy.get('[data-cy="Select a Job"]')
            .select("Barn 10")


        cy.get('[data-cy="Select a Equipement"]')
            .select("Hitachi 4")



        // select hours
        cy.get(':nth-child(7) > .amplify-flex > .amplify-field-group__outer-end > .amplify-button').then(($el) => {
            for (let i = 0; i < 7; i++) {
                cy.wrap($el).click()
            }
        })

        cy.contains("Save").click()


        // Redirect to calendar 
        cy.visit('http://localhost:3000/calendar')
        // Verify that the new Day was created successfully
        cy.url().should('contain', "calendar")
        cy.contains('Costa 9')
    })
})