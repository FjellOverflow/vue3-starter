describe('Hello World', () => {
  it('changes language', () => {
    cy.visit('/')

    cy.get('body').contains('Hello, world!')

    cy.get('button').click()

    cy.get('body').contains('Hallo, verden!')

    cy.get('button').click()

    cy.get('body').contains('Hallo, Welt!')
  })
})
