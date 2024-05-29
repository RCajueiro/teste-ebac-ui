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
    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.sold-text').should('exist')
    });
    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('ajax full zip sweatshirt')
        cy.get('.sku').should('contain' , 'MH12')
    });
    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 50
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('XL', 'Yellow', qtd)
        cy.get('.woocommerce-message').should('contain' , 'adicionado')

    });
    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain' , 'adicionado')
        })
        
    });
});