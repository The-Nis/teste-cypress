describe('', () => {
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    });


    it('verificar mensagens de validação', () => {
        
        cy.contains('a', 'Register now').click()
        cy.contains('ap-vmessage', 'Email is required').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('button', 'Register').click()
    });




});