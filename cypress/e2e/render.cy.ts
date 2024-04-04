describe('Checks the rendering of components on screen', () => {
    it('verify render Cards Characters on the screen', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid="value-Luke Skywalker"]').should('exist')
    })
    
    it('verify render Pagination on the screen', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid="pagination"]').should('exist')
    })
    
    it('verify render Navbar on the screen', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid="navbar"]').should('exist')
    })
    
    it('verify render People Name on the screen', () => {
        cy.visit('http://localhost:3000/people/1')
        cy.get('[data-testid="people-name"]').should('exist')
    })
})