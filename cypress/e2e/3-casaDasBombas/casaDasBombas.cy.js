describe('Casa das Bombas', () => {
    beforeEach(() => {
        cy.visit('http://192.168.125.251:57412/CasaBombasSuporte/#/');
    });

    it('Login Casa das Bombas', () => {
        cy.get('.q-my-md > .q-field__inner > .q-field__control').type('adm');
        // cy.get('input[formcontrolname="password"]').type('123');
    })

});