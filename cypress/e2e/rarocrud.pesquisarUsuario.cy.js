import { faker } from "@faker-js/faker";
import CadastroPage from "../support/pages/cadastro.page";
import PesquisarPage from "../support/pages/pesquisar.page";
describe("Pesquisar Usuario", function () {
  const name = "testeraro";
  const email = faker.internet.email();
  var paginaRegistro = new CadastroPage();
  var paginaPesquisa = new PesquisarPage();
  before(function () {
    cy.visit("/users");
    paginaRegistro.getNovo();
    paginaRegistro.typeNome(name);
    paginaRegistro.typeEmail(email);
    paginaRegistro.clikButtonSalvar();
    cy.get(paginaRegistro.cadastroSucesso)
      .should("be.visible")
      .and("have.text", "Usuário salvo com sucesso!");
  });
  it("Deve ser possivel pesquisar usuario pelo email", function () {
    cy.visit("/users");
    cy.get(paginaPesquisa.inputEmailouNome).should("be.visible");
    paginaPesquisa.typeEmailPesquisa(email);
    cy.wait(4000);
    cy.log(email);
    cy.get(paginaPesquisa.userDataName).contains(name);
    cy.get(paginaPesquisa.userDataEmail).should(
      "contain.text",
      "E-mail",
      email
    );
    cy.get(paginaPesquisa.buttonDetalhes).should("be.visible");
    cy.get(paginaPesquisa.buttonRemover).should("be.visible");
  });
  it("Deve ser possivel ver detalhes do usuario encontrado", function () {
    cy.visit("/users");
    paginaPesquisa.typeEmailPesquisa(email);
    cy.wait(4000);
    cy.get(paginaPesquisa.buttonDetalhes).click();
    cy.wait(4000);
    cy.get(".sc-dLMFU.Mcjyi").should("be.visible");
  });
});
