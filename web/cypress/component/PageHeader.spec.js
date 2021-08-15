/// <reference types="cypress" />

import React from 'react'

import PageHeader from '../../src/components/PageHeader/index'

import { mount } from 'cypress-react-unit-test'

import { BrowserRouter as Router } from 'react-router-dom'

context('PageHeader component', () => {

  const BASE_CSS = '/__root/src/assets/styles/global.css'
  const INDEX_CSS = '/__root/src/components/PageHeader/styles.css'
  //const BASE_CSS = '../../src/assets/styles/global.css'
  //const INDEX_CSS = '../../src/components/PageHeader/styles.css'

  it('Componente deve ser renderizado com sucesso', () => {

    const TITLE = "Que incrível que você quer dar aulas."
    const DESCRIPTION = "O primeiro passo é preencher esse formulário de inscrição."

    mount(
      <Router>
        <PageHeader
          title={TITLE}
          description={DESCRIPTION}
        />
      </Router>
      ,  
      {
        stylesheets: [BASE_CSS, INDEX_CSS]
      }
    ) 
    
    // HACK - Refatarando código

    /*
    cy.get('.page-header').as('header')
    cy.get('strong').as('title')
    cy.get('p').as('description')
    */

    //HACK - Código refatorado

    cy.get('.page-header').as('header')
    cy.get('@header').find('strong').as('title')
    cy.get('@header').children().find('p').as('description')

    cy.get('@title').should('have.text', TITLE)
    cy.get('@description').should('have.text', DESCRIPTION)

    cy.get('@header').then(($elemento) => {
      //cy.log($elemento.css('background-color'))
      expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229)')
      expect($elemento.css('flex-direction')).to.be.equal('column')
    })


  })
})
