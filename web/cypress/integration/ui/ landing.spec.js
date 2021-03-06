/// <reference types="cypress" />

const LARGURAS = [1200, 1090] //1200 acima e 1090 abaixo do ponto de quebra da tela

LARGURAS.forEach(largura => {
  context(`Landing Page - ${largura}px`, () => { //HACK - Com o uso de templates literals o teste 
    beforeEach(() => {
      cy.visit('/')
      cy.viewport(largura, 900 ) //width = largura e Height = altura
      cy.log('Largura: ', largura)
    })

    it('Navegar para o cadastro de aulas', () => {
      cy.get('div a.give-classes').click()
      cy.url().should('contain', 'give-classes')
    })
    
    it('Navegar para pesquisa de professores', () => {
      cy.get('div a.study').click()
      cy.url().should('contain', 'study')
      
    })
  })
})
