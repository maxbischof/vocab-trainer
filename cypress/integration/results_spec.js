describe('Results', () => {
  it('Adds and Shows result of user result to', () => {
    const Name = 'Alejandro' + Math.floor(Math.floor(Math.random() * 1000000))

    cy.visit('localhost:3000/tests/795951')

    cy.get('input').type(Name)
    cy.contains('Test starten').click()

    cy.get('input').type('the candle').type('{enter}')
    cy.get('input').type('the tea').type('{enter}')
    cy.wait(2000)

    cy.visit('localhost:3000/results/795951')
    cy.contains(Name + ': 2')
  })

  it('Tests user with 0.5 points', () => {
    const Name = 'Alejandro' + Math.floor(Math.floor(Math.random() * 1000000))

    cy.visit('localhost:3000/tests/795951')

    cy.get('input').type(Name)
    cy.contains('Test starten').click()

    cy.get('input').type('thee canddle').type('{enter}')
    cy.get('input').type('the teaa').type('{enter}')

    cy.wait(2000)

    cy.visit('localhost:3000/results/795951')
    cy.contains(Name + ': 0.5')
  })
})
