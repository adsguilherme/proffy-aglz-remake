/// <reference types="cypress" />

context('Connections endpoints', () => {
  it('GET - Obter total de conexões realizadas', () => {
  
    cy.request({
      method: 'GET',
      url: 'http://localhost:3333/connections'
    }).then((response) => {
      console.log(response)
    })
  })
})
