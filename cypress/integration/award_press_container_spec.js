describe('Award Press Container', () => {
  beforeEach(() => {
    //intercept the get request for the epk
    cy.fixture('getEPK-2.json').then((epk) => {
      cy.intercept('https://epk-be.herokuapp.com/api/v1/film_epk/12', epk)
    })

    //intercept the post for an award
    cy.fixture('press.json').then((press) => {
      cy.intercept('https://epk-be.herokuapp.com/api/v1/presses', press)
    })
    //visit the edit page
    cy.visit('http://localhost:3000/edit/12')
  })

  it('should have a header, an edit button, and a display', () => {
    cy.get('.awards-press-title').contains('Articles and Awards')
      .get('.awards-press-edit-btn').should('be.visible')
      .get(':nth-child(1) > .award-card-styling-div > .award-text > :nth-child(1)').contains('The Times')
      .get(':nth-child(1) > .award-card-styling-div > .award-text > :nth-child(2)').contains('brilliant')
      .get(':nth-child(2) > .award-card-styling-div > .award-text > :nth-child(1)').contains('Sunshiny')
      .get(':nth-child(2) > .award-card-styling-div > .award-text > :nth-child(2)').contains('Best smoosh of the year')
      .get('.award-text > :nth-child(3)').contains('2021')
  })

  it('should be able to add a card', () => {
    cy.get('.awards-press-edit-btn').click()
      .get('#award-or-press').should('be.visible')
    
      
  })
})