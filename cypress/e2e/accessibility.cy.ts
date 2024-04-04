describe('Accessibility Tests', () => {
  it('Must audit Home Page accessibility', () => {
    cy.visit('http://localhost:3000/')
    cy.injectAxe();
    cy.checkA11y();
  });
  
  it('Must audit People Page accessibility', () => {
    cy.visit('http://localhost:3000/people/1')
    cy.injectAxe();
    cy.checkA11y();
  });
});
