import { faker } from "@faker-js/faker";
import CadastroPage from "../support/pages/cadastro.page";
describe("Pesquisar Usuario", function () {
  const name = "testeraro";
  const email = faker.internet.email();
  let emailCadastrado;
  var paginaRegistro = new CadastroPage();
  beforeEach(function () {
    cy.visit("/users");
    paginaRegistro.getNovo();
    paginaRegistro.typeNome(name);
    paginaRegistro.typeEmail(email);
    paginaRegistro.clikButtonSalvar();
    emailCadastrado = email;
  });
  it("Deve ser possivel pesquisar usuario pelo email", function () {
    cy.visit("/users");
    cy.get(".sc-dcJsrY.hcYPTs").should("be.visible");
    cy.get(".sc-dcJsrY.hcYPTs").type(email);
    cy.get("#userDataDetalhe").should("be.visible");
  });
});
