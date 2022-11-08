// describe('', () => { }); - Função com dois argumentos
// Primeiro argumento é o nome da switch de teste
// Segundo argumento é uma função, callback
// A primeira orientação dentro da função é o beforeEach()
// Exemplo: beforeEach(() => { cy.visit('https://teste') })
// beforeEach é o comando que será executado antes de cada caso de teste
// !Manter uma interdependência antes dos testes, um teste não pode depender de outro teste realizado anteriormente

//it - é o item de teste
//it('titulo', () => { cy.get('.todo-list li').should('have.length', 2) })
// get - obtem o elemento
//should - garante que será feito a verificação
// cy.get('.todo-list li').first().should('have.text', 'title1')
// cy.get('.todo-list li').last().should('have.text', 'title2')

describe('alura busca cursos', () => {
    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Java e Orientação a Objetos');
    })
});

// Buscar o elemento HTML sem ser refernciando pela posição
// Utilizar o selector Playground para copiar o endereço do elemento que será testado
