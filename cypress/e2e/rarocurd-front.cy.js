import { faker } from "@faker-js/faker";
import CadastroPage from "../support/pages/cadastro.page";
describe("Criar usuario", function () {
  var paginaRegistro = new CadastroPage();
  const name = "testeraro";
  const email = faker.internet.email();
  let emailCadastrado;
  beforeEach(function () {
    cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
  });
  describe("Registro de usuario com sucesso", function () {
    it("cadastrar usuario com credenciais validas", function () {
      paginaRegistro.getNovo();
      paginaRegistro.typeNome(name);
      paginaRegistro.typeEmail(email);
      paginaRegistro.clikButtonSalvar();
      cy.get(".go3958317564")
        .should("be.visible")
        .and("have.text", "Usuário salvo com sucesso!");
      emailCadastrado = email;
      cy.log(emailCadastrado);
    });
  });
  describe("Nao deve ser possivel cadastar", function () {
    it("O formato de email deve ser valido", function () {
      paginaRegistro.getNovo();
      paginaRegistro.typeNome(name);
      paginaRegistro.typeEmail("emailinvalido");
      paginaRegistro.clikButtonSalvar();
      cy.get(".sc-cPiKLX")
        .should("be.visible")
        .and("have.text", "Formato de e-mail inválido");
    });

    it("Nao deve ser possivel cadastar usuario com email ja utilizado", function () {
      paginaRegistro.getNovo();
      paginaRegistro.typeNome(name);
      paginaRegistro.typeEmail(emailCadastrado);
      paginaRegistro.clikButtonSalvar();
      cy.get(".sc-dCFHLb")
        .should("be.visible")
        .and("<p>", "Este e-mail já é utilizado por outro usuário.");
    });
  });
});
