/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
	it('POST - Cadastrar um novo professor', () => {
		cy.api({
			method: 'POST',
			url: `${Cypress.config().apiUrl}/classes`,
			body: {
				name: 'gscode',
				avatar: 'https://avatarfiles.alphacoders.com/125/125160.png',
				whatsapp: '554499999999',
				bio: 'Que incrível que você quer dar aulas.',
				subject: 'Ciências',
				cost: 100,
				schedule: [
					{
						week_day: 0,
						from: '08:00',
						to: '09:00',
					},
				],
			},
		}).then(response => {
			expect(response.status).to.eq(201)

      // expect(response.body)
      //   .to.have.property('user_id') //TODO - Aqui é um array [], e não consegui fazer essa asserção do response body. Pesquisar como fazer isso.

      expect(response.headers)
        .to.have.property('content-type') // Objeto com várias propriedades
        .an('string')
        .equal('application/json; charset=utf-8')
		})
	})
})