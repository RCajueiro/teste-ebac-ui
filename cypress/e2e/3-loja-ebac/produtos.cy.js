/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').first().click()
        cy.get('.sku_wrapper').should('exist')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').last().click()
        cy.get('.sku_wrapper').should('exist')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.sku_wrapper').should('exist')
    });
});