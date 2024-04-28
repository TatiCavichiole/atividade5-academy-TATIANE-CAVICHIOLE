describe("Listar usuários", function () {
  beforeEach(function () {
    cy.visit("/users");
  });
  describe("Deve ser possivel visualizar usuarios cadastrados", function () {
    it("deve exibir opçao para cadastrar quando a lista de usuarios estiver vazia", function () {
      cy.intercept("GET", "/api/v1/users", {
        statusCode: 200,
        body: [],
      }).as("listaVazia");

      cy.wait("@listaVazia");
      cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should(
        "exist"
      );
      cy.get(".sc-bmzYkS").click();
    });
  });
  it("deve exibir paginação quando tiver mais de 6 usuarios cadastrados", function () {
    cy.intercept("GET", "/api/v1/users").as("listagemUsuario");
    cy.contains(".sc-hmdomO.irtGmQ", "Anterior").should("be.visible");
    cy.contains(".sc-hmdomO.irtGmQ", "Próxima").should("be.visible");
    cy.wait("@listagemUsuario").then(function (resultado) {
      expect(resultado.response.body).to.be.an("Array");
      cy.get("#paginacaoAtual")
        .invoke("text")
        .then(function (paginas) {
          cy.log(paginas);
        });
    });
  });
});
