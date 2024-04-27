export default class CadastroPage {
  inputNome = "#name";
  inputEmail = "#email";

  buttonSalvar = ".sc-dAlyuH";
  linkPaginaVoltar = '[href="/users"]';
  linkPaginaNovo = '[href="/users/novo"]';

  getNovo() {
    cy.get(this.linkPaginaNovo).click();
  }
  typeNome(name) {
    cy.get(this.inputNome).type(name);
  }
  typeEmail(email) {
    cy.get(this.inputEmail).type(email);
  }
  clikButtonSalvar() {
    cy.get(this.buttonSalvar).click();
  }
}
