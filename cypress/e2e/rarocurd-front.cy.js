import { faker } from "@faker-js/faker";
describe("Criar usuario", function () {
  const name = faker.person.fullName();
  const email = faker.internet.email();
  beforeEach(function () {
    cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
  });
  describe("Registro de usuario com sucesso", function () {
    it("cadastrar usuario com credenciais validas", function () {
      cy.get(".sc-gEvEer").click();
      cy.get("#name").type(name);
      cy.get("#email").type(email);
      cy.get(".sc-dAlyuH").click();
      //cy.intercept('POST', '/users/novo').as('usuarioCriado');
      cy.get(".go3958317564")
        .should("be.visible")
        .and("have.text", "Usuário salvo com sucesso!");
    });
  });
  describe("Nao deve ser possivel cadastar", function () {
    it.only("O formato de email deve ser valido", function () {
      cy.get(".sc-gEvEer").click();
      cy.get("#name").type(name);
      cy.get("#email").type("email.com");
      cy.get(".sc-dAlyuH").click();
      cy.get(".sc-cPiKLX")
        .should("be.visible")
        .and("have.text", "Formato de e-mail inválido");
    });
  });
});
