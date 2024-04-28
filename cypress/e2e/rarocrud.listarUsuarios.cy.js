describe("Listar usuários", function () {
  beforeEach(function () {
    cy.visit("/users");
  });
  describe("Deve ser possivel visualizar usuarios cadastrados", function () {
    it("visualizar usuarios", function () {
      cy.get("#listaUsuarios").should("be.visible");
    });
  });
});
