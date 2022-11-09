describe('Acessar o site IWT', () => {
    beforeEach(() => {
        cy.visit('https://iwt.com.br/');
    });

    it('Acessar', () => {

        // Serviços
        cy.get('.sf-with-ul').click()
        // Indústria
        cy.get('.tatsu-BJDnS7P0f > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-normal-icon > .tatsu-icon-wrap > .tatsu-icon').click()
        cy.get('.sf-with-ul').click()
        // Seu Negócio
        cy.get('.tatsu-rkxP2SmwCz > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-normal-icon > .tatsu-icon-wrap > .tatsu-icon').click()
        cy.get('.sf-with-ul').click()
        // On Demand
        cy.get('.tatsu-BJ-D2HXD0G > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-normal-icon > .tatsu-icon-wrap > .tatsu-icon').click()
        cy.get('.sf-with-ul').click()
        // Mobile
        cy.get('.tatsu-ryMwnrmD0M > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-normal-icon > .tatsu-icon-wrap > .tatsu-icon').click()
        // Pagina Principal
        cy.get('.normal-logo').click()
        // Cases
        cy.get('#menu-item-118 > a').click()
        // Mitalcopy
        cy.get('[style="margin-bottom: 0px; position: absolute; left: 0px; top: 0px;"] > .element-inner > .thumb-wrap > .flip-wrap > .flip-img-wrap > img').click()
        cy.get('#menu-item-118 > a').click()
        // Wittur
        cy.get('.parallax-effect > .element-inner > .thumb-wrap > .flip-wrap > .flip-img-wrap > img').click()
        cy.get('#menu-item-118 > a').click()
        // Schindler
        cy.get('[style="margin-bottom: 0px; position: absolute; left: 656px; top: 0px;"] > .element-inner > .thumb-wrap > .flip-wrap > .flip-img-wrap > img').click()
        // Pagina Principal
        cy.get('.normal-logo').click()
        // A Empresa
        cy.get('#menu-item-58 > a').click()
        // Pagina Principal
        cy.get('.normal-logo').click()
        // Contato
        cy.get('#menu-item-117').click()
    });

});