describe('Vue', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/');
    });

    it('Acessar vue', () => {
        
        cy.get('[type="text"]').type('adm')
        cy.get('[type="password"]').type('123')
        cy.get('button').click()

    });

});