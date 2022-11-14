// const { expect } = require("chai");

describe('', () => {
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    });

    it('verificar mensagens de validacao', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');

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

    it('fazer login de usuario valido', () => {
        // cy.get('input[formcontrolname="userName"]').type('flavio');
        // cy.get('input[formcontrolname="password"]').type('123');
        // cy.get('button[type="submit"]').click();
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible');
    });

    it('fazer login de usuario invalido', () => {
        // cy.get('input[formcontrolname="userName"]').type('denis');
        // cy.get('input[formcontrolname="password"]').type('1234');
        // cy.get('button[type="submit"]').click();
        cy.login('denis', '1234')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    });

    const usuarios = require('../../fixtures/usuarios.json');
    
    usuarios.forEach(usuario => {
        it.only(`resgitra novo usuario ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click()
        });
    });




});