// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.api({
    method: "POST",
    url: "/login",
    body: { email, password },
    failOnStatusCode: false,
  }).then((res) => {
    expect(res.status).to.eq(200);
    Cypress.env("token", res.body.authorization);
  });
});

Cypress.Commands.add("criarUsuario", (user) => {
  return cy.api({
    method: "POST",
    url: "/usuarios",
    body: user,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("criarProduto", (produto) => {
  return cy.api({
    method: "POST",
    url: "/produtos",
    headers: { Authorization: Cypress.env("token") },
    body: produto,
    failOnStatusCode: false,
  });
});
