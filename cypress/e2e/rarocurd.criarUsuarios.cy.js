import { faker } from "@faker-js/faker";
import CadastroPage from "../support/pages/cadastro.page";
describe("Criar usuario", function () {
  var paginaRegistro = new CadastroPage();
  const name = "testeraro";
  const email = faker.internet.email();
  let emailCadastrado;
  beforeEach(function () {
    cy.visit("/users");
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
      cy.contains("Este e-mail já é utilizado por outro usuário.").should(
        "exist"
      );

      cy.get("button.sc-lcIPJg.ifkIA-D").click();
    });
    it("Nao deve ser possivel cadastrar um nome com mais de 100 caracteres", function () {
      paginaRegistro.getNovo();
      paginaRegistro.typeNome(
        name +
          "abcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxy"
      );
      paginaRegistro.typeEmail(email);
      paginaRegistro.clikButtonSalvar();
      cy.get(".sc-cPiKLX.feFrSQ")
        .should("be.visible")
        .and("have.text", "Informe no máximo 100 caracteres para o nome");
    });
    it("Nao deve ser possivel cadastrar um email com mais de 60 caracteres", function () {
      paginaRegistro.getNovo();
      paginaRegistro.typeNome(name);
      paginaRegistro.typeEmail(
        "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl@raro.com"
      );
      paginaRegistro.clikButtonSalvar();
      cy.get(".sc-cPiKLX.feFrSQ")
        .should("be.visible")
        .and("have.text", "Informe no máximo 60 caracteres para o e-mail");
    });
    it("Nao deve ser possivel cadastar um nome com menos de 4 caracteres", function () {
      paginaRegistro.getNovo();
      paginaRegistro.typeNome("bia");
      paginaRegistro.typeEmail(email);
      paginaRegistro.clikButtonSalvar();
      cy.get(".sc-cPiKLX.feFrSQ")
        .should("be.visible")
        .and("have.text", "Informe pelo menos 4 letras para o nome.");
    });
    it("Nao deve ser possivel cadastrar usuario com campo nome vazio", function () {
      paginaRegistro.getNovo();
      paginaRegistro.typeEmail(email);
      paginaRegistro.clikButtonSalvar();
      cy.get(".sc-cPiKLX.feFrSQ")
        .should("be.visible")
        .and("have.text", "O campo nome é obrigatório.");
    });
    it("Nao deve ser possivel cadastrar usuario com campo email vazio", function () {
      paginaRegistro.getNovo();
      paginaRegistro.typeNome(name);
      paginaRegistro.clikButtonSalvar();
      cy.get(".sc-cPiKLX.feFrSQ")
        .should("be.visible")
        .and("have.text", "O campo e-mail é obrigatório.");
    });
  });
});
// it.only("nome e email invalidos", function () {
//   paginaRegistro.getNovo();
//   paginaRegistro.typeNome("bia");
//   paginaRegistro.typeEmail("email");
//   paginaRegistro.clikButtonSalvar();
//   cy.get(".sc-cPiKLX.feFrSQ")
//     .should("be.visible")
//     .and("have.text", "Informe pelo menos 4 letras para o nome.");
// });
