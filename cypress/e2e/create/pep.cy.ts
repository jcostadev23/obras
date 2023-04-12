describe('Creating a new person', () => {
  it('passes', () => {
    const randomName = 'Jose Costa  ' + Math.floor(Math.random() * 20)
    const randomPhone = '07700344350' + Math.floor(Math.random() * 20)
    const randomRole = 'Caminho do cabouco' + Math.floor(Math.random() * 20)


    cy.visit('http://localhost:3000')

    // Moving to page People
    cy.get('[data-testid="amplify-menu-trigger-test-id"]').click()

    cy.contains('People').click()

    // Click the submit button
    cy.contains('Create people').click()


    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.

    cy.get('body').click()

    // Enter values into the form fields
    cy.get('body').click()
    cy.get(':nth-child(1) > .amplify-label').click()
      .type(randomName);
    cy.get(':nth-child(2) > .amplify-label').click()
      .type(randomPhone);
    cy.get(':nth-child(3) > .amplify-label').click()
      .type(randomRole);


    // Click the submit button
    cy.get('[type="submit"]').click();

    // Verify that the new person was created successfully
    cy.url().should('contain', '/people')
    cy.contains(randomName).should('exist')
  })

})
