describe("Login", () => {
  it("deve logar com sucesso", () => {
    cy.login("fulano@qa.com", "teste");
  });

  it("não deve logar com senha incorreta", () => {
    cy.api({
      method: "POST",
      url: "/login",
      failOnStatusCode: false,
      body: { email: "fulano@qa.com", password: "errado" },
    }).then((res) => {
      expect(res.status).to.eq(401);
    });
  });
});
