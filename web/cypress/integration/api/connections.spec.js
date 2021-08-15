/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Connections endpoints', () => {
  it('GET - Obter total de conexões realizadas', () => {
    
    cy.api({
      method: 'GET',
      url: `${Cypress.config().apiUrl}/connections`
    }).then((response) => {
      //console.log(response)
      expect(response.status).to.eq(200)
      expect(response.duration).lessThan(20) // HACK - Podemos usar uma abreviação para lessThan, ficando lt

      expect(response.body)
        .to.have.property('total') // deve ter a propriedade 'total'
        .to.be.a('number') // deve ser um 'number'
        .greaterThan(5) // deve ser acima de 5

      // HACK - Outro modo de realizar a a asserção  
      expect(response.body.total)
        .an('number')
        .satisfy((totalValue) => { return totalValue >= 5 })

      // validando o response headers
      expect(response.headers)
        .to.have.property('content-type') // Objeto com várias propriedades
        .an('string')
        .equal('application/json; charset=utf-8')
    })
  })
})
