describe("Usuários", () => {
  it("deve criar um usuário com sucesso", () => {
    cy.criarUsuario({
      nome: "Teste User",
      email: `user${Date.now()}@teste.com`,
      password: "1234",
      administrador: "true",
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it("não deve criar usuário duplicado", () => {
    const email = `dup${Date.now()}@teste.com`;

    cy.criarUsuario({
      nome: "User Dup",
      email,
      password: "1234",
      administrador: "true",
    });

    cy.criarUsuario({
      nome: "User Dup",
      email,
      password: "1234",
      administrador: "true",
    }).then((res) => {
      expect(res.status).to.eq(400);
    });
  });
});
