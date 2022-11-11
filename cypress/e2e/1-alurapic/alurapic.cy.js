describe('', () => {
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    });

    it('verificar mensagens de validacao', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'sEmail is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'sFull name is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'sUser name is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'sPassword is required!').should('be.visible');

    });

    it('verificar mensagem de email invalido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('denis');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

    });

    it('verificar tamanho do nome se e maior 2', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('d');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
        
    });

    it('verificar tamanho do nome de usuario se e maior 2', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('d');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
        
    });

    it('verificar se nome de usuario e maiusculo', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('TESTE');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
        
    });

    it('verificar senha com menos de 8 caracteres', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
        

    });



});