import getUser from '../fixtures/getUser.json';

describe('Dashboard', () => {
  beforeEach(() => {
    cy.fixture('getUser.json').then((userInfo) => {
      cy.intercept('https://epk-be.herokuapp.com/api/v1/users/1', userInfo)
    })
    
    cy.visit('http://localhost:3000/dashboard/1')
  })
  
  it('should do have a header with a logo and no home link', () => {
    cy.get('.logo').should('be.visible')
      .get('.menu').should('not.exist')
  })

  it('should display a user\'s existing EPKs', () => {
    cy.get('.titles-container').children().should('have.length', 2)
    cy.get(':nth-child(1) > .linked-title > .go-to-edit > .title-text').contains('The Adventures of Mini')
    
  })

  it('should do have a form for inputing a new EPK', () => {
    cy.get('.create-epk').should('not.exist')
      .get('[type="text"]').type('Awesome Movie')
      .get('.create-epk').should('be.visible').click()
    
    cy.get('.titles-container').children().should('have.length', 3)

    cy.get(':nth-child(1) > .linked-title > .go-to-edit > .title-text').contains('Awesome Movie')
  })
  
  it('should allow a user to delete an EPK', () => {
    cy.intercept('https://epk-be.herokuapp.com/api/v1/film_epk/1', {
      status: 204
    })
    
    cy.get('.titles-container > :nth-child(1) > .MuiButton-root').click()

    cy.get(':nth-child(1) > .linked-title > .go-to-edit > .title-text').contains('Film That\'s Bueno')
  })

})