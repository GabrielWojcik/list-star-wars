describe('Navigation', () => {
    it('should navigate to the people page', () => {
      cy.visit('http://localhost:3000/')
   
      cy.get('a[href*="/people/1"]').click({ multiple: true })
   
      cy.url().should('include', '/people/1')
   
      cy.get('h1').contains('Name')
    })
})