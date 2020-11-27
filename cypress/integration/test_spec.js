describe('TestCreator', () => {
  it('Tests user with all correct answers', () => {
    cy.visit('localhost:3000/tests/795951')

    cy.get('input').type('Alejandro')
    cy.contains('Test starten').click()

    cy.get('input').type('the candle').type('{enter}')

    cy.get('input').type('the tea').type('{enter}')
    cy.contains('Du hast 2 / 2 Punkten erreicht.')
  })

  it('Tests user with 0.5 points', () => {
    cy.visit('localhost:3000/tests/795951')

    cy.get('input').type('Alejandro')
    cy.contains('Test starten').click()

    cy.get('input').type('thee canddle').type('{enter}')

    cy.get('input').type('the teaa').type('{enter}')
    cy.contains('Du hast 0.5 / 2 Punkten erreicht.')
  })
})
