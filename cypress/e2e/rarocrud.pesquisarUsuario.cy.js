import { faker } from "@faker-js/faker";
import CadastroPage from "../support/pages/cadastro.page";
describe("Pesquisar Usuario", function () {
  const name = "testeraro";
  const email = faker.internet.email();
  var paginaRegistro = new CadastroPage();
  before(function () {
    cy.visit("/users");
    paginaRegistro.getNovo();
    paginaRegistro.typeNome(name);
    paginaRegistro.typeEmail(email);
    paginaRegistro.clikButtonSalvar();
    cy.get(".go3958317564")
      .should("be.visible")
      .and("have.text", "Usuário salvo com sucesso!");
  });
  it("Deve ser possivel pesquisar usuario pelo email", function () {
    cy.visit("/users");
    cy.get(".sc-dcJsrY.hcYPTs").should("be.visible");
    cy.get(".sc-gsFSXq.mUpIH").type(email);
    cy.wait(4000);

    cy.log(email);
    cy.get("#listaUsuarios").contains(name);
    cy.contains(".sc-dAbbOL.lcgSvJ", "E-mail").should("be.visible");
    cy.get("#userDataDetalhe").should("be.visible");
    cy.get(".sc-fUnMCh.dttKkA").should("be.visible");
  });
});
