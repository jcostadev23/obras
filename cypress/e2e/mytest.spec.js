describe('My test', () => {
    it('should navigate to the peoplepage and display the card', () => {
        cy.visit('/people')
        cy.get('PersonCard').contains('personcard')
    })
})