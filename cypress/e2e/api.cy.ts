describe('API Tests', () => {
    it('You must make a GET request to the API and list all characters', () => {
      cy.request('GET', 'https://swapi.dev/api/people')
        .then((response) => {
          expect(response.status).to.eq(200);
          
          expect(response.body).to.have.property('results');
        });
    });
    it('Must list only one character', () => {
      cy.request('GET', 'https://swapi.dev/api/people/1')
        .then((response) => {
          expect(response.status).to.eq(200);
          
          expect(response.body).to.have.property('name');
        });
    });
    it('Must list people page', () => {
      cy.request('GET', 'https://swapi.dev/api/people/?page=1')
        .then((response) => {
          expect(response.status).to.eq(200);
          
          expect(response.body).to.have.property('results');
        });
    });
  });
  