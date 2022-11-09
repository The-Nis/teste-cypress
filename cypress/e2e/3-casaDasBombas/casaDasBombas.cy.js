describe('Casa das Bombas', () => {
    beforeEach(() => {
        cy.visit('http://192.168.125.251:57412/CasaBombasSuporte/#/');
    });

    it('Login Casa das Bombas', () => {
        // cy.get('input').type('adm');
        cy.get('input').type('123')
        cy.get('.q-field__append > .cursor-pointer');
        cy.get('.q-btn__content').click();
    })

});