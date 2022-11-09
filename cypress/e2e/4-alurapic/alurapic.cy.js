describe('Acessar YouTube', () => {
    beforeEach(() => {
        cy.visit('https://www.youtube.com/');
    });

    it('Pesquisar cypress', () => {

        cy.get('#search-input > #search').type('cypress teste')
        cy.get('#search-icon-legacy > yt-icon.style-scope').click()
        

    });

});