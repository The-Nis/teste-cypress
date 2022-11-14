describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.youtube.com/');
    });

    it('', () => {
        cy.get('#search-form > #container').type('cypress testes automatizados')
        cy.get('#search-icon-legacy').click()
        cy.get('[aria-label="Shorts"] > #endpoint').click()
    });
});