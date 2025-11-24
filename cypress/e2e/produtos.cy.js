describe("Produtos", () => {
  before(() => {
    cy.login("fulano@qa.com", "teste");
  });

  it("deve cadastrar um produto", () => {
    cy.criarProduto({
      nome: `Teclado${Date.now()}`,
      preco: 150,
      descricao: "Produto teste",
      quantidade: 5,
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it("não deve cadastrar produto duplicado", () => {
    const nome = `Mouse${Date.now()}`;

    cy.criarProduto({ nome, preco: 80, descricao: "Mouse", quantidade: 10 });
    cy.criarProduto({
      nome,
      preco: 80,
      descricao: "Mouse",
      quantidade: 10,
    }).then((res) => {
      expect(res.status).to.eq(400);
    });
  });
});
