describe('template spec', () => {
  it('passes', () => {
    const randomJob = ' Barn ' + Math.floor(Math.random() * 20)
    const randomAddress = 'Trinity' + Math.floor(Math.random() * 20)


    cy.visit('http://localhost:3000')

    // Moving to page Job
    cy.get('[data-testid="amplify-menu-trigger-test-id"]').click()


    cy.contains('Jobs').click()


    cy.contains('Create Jobs').click()

    // Enter values into the form fields
    cy.get('body').click()
    cy.get(':nth-child(1) > .amplify-label').click()
      .type(randomJob);
    cy.get(':nth-child(2) > .amplify-label').click()
      .type(randomAddress);

    // Click the submit button
    cy.get('[type="submit"]').click();

    // Verify that the new Job was created successfully
    cy.url().should('contain', '/jobs')
    cy.contains(randomJob).should('exist')

  })
})