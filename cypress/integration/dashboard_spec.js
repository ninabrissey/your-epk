import getUser from '../fixtures/getUser.json';

describe('Dashboard', () => {
  beforeEach(() => {
    cy.fixture('getUser.json').then((userInfo) => {
      cy.intercept('https://epk-be.herokuapp.com/api/v1/users/1', userInfo)
    })
    
    cy.visit('http://localhost:3000/dashboard/1')
  })
  
  it('should do have a header with a logo', () => {
    cy.get()
  })

  it('should do have a form for inputing a ', () => {

  })


  it('should display a user\'s existing EPKs', () => {
    
  })
  
  it('should allow a user to delete an EPK', () => {
    
  })

  it('should be able to create a new EPK and redirect user to epk edit page', () => {

  })
})