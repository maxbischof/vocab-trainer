describe('TestCreator', () => {
  it('Adds wordpairs to the test preview', () => {
    cy.visit('localhost:3000')
    cy.get('input[name="foreign"]').type('the candle')
    cy.get('input[name="native"]').type('die Kerze')
    cy.contains('Add word').click()

    cy.contains('the candle')
    cy.contains('die Kerze')
  })

  it('Removes wordpair by clicking delete', () => {
    cy.visit('localhost:3000')
    cy.get('input[name="foreign"]').type('the candle')
    cy.get('input[name="native"]').type('die Kerze')
    cy.contains('Add word').click()

    cy.get('input[name="foreign"]').type('the tea')
    cy.get('input[name="native"]').type('der Tee')
    cy.contains('Add word').click()

    cy.contains('the candle')
      .parent('div')
      .parent('li')
      .within(() => {
        cy.get('svg').click()
      })

    cy.contains('the candle').should('not.exist')
  })

  it('Creates test and visits test', () => {
    cy.visit('localhost:3000')
    cy.get('input[name="foreign"]').type('the candle')
    cy.get('input[name="native"]').type('die Kerze')
    cy.contains('Add word').click()

    cy.get('input[name="foreign"]').type('the tea')
    cy.get('input[name="native"]').type('der Tee')
    cy.contains('Add word').click()

    cy.get('button').contains('Test erstellen').click()

    cy.contains('localhost').click()

    cy.get('input').type('Jule')
    cy.contains('Test starten').click()

    cy.contains('die Kerze')
  })
})
