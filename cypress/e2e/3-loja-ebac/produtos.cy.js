/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
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
    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.sold-text').should('exist')
    });
    it('Deve visitar a página do produto', () => {
        
    });
    it('Deve adicionar produto ao carrinho', () => {
        
    });
});