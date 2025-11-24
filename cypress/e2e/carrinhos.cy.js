describe("Carrinhos", () => {
  let produtoId;

  before(() => {
    cy.login("fulano@qa.com", "teste");

    cy.criarProduto({
      nome: `Item${Date.now()}`,
      preco: 200,
      descricao: "Item de teste",
      quantidade: 3,
    }).then((res) => {
      produtoId = res.body._id;
    });
  });

  it("deve criar um carrinho com um produto", () => {
    cy.api({
      method: "POST",
      url: "/carrinhos",
      headers: { Authorization: Cypress.env("token") },
      body: {
        produtos: [{ idProduto: produtoId, quantidade: 1 }],
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it("deve deletar um carrinho", () => {
    cy.api("/carrinhos").then((lista) => {
      const id = lista.body.carrinhos[0]._id;

      cy.api({
        method: "DELETE",
        url: `/carrinhos/concluir-compra`,
        headers: { Authorization: Cypress.env("token") },
      }).then((res) => {
        expect(res.status).to.eq(200);
      });
    });
  });
});
