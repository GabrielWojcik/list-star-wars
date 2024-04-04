import 'cypress-audit/commands';

describe('Accessibility Tests', () => {
  it('Must audit homepage accessibility', () => {
    cy.visit('http://localhost:3000/')
    cy.injectAxe();
    cy.checkA11y();
  });
});
