export default class CadastroPage {
  inputNome = "#name";
  inputEmail = "#email";

  buttonSalvar = ".sc-dAlyuH";
  linkPaginaVoltar = '[href="/users"]';
  linkPaginaNovo = '[href="/users/novo"]';
  cadastroSucesso = ".go3958317564";
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
  // mensagemSucesso() {
  //   cy.get(this.cadastroSucesso);
  // }
}
