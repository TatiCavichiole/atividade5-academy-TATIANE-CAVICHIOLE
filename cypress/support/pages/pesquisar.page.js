export default class PesquisarPage {
  inputEmailouNome = ".sc-gsFSXq";
  userDataName = '[data-test="userDataName"]';
  userDataEmail = '[data-test="userDataEmail"]';
  buttonDetalhes = "#userDataDetalhe";
  buttonRemover = ".sc-fUnMCh.dttKkA";

  typeNomePesquisa(name) {
    cy.get(this.inputEmailouNome).type(name);
  }
  typeEmailPesquisa(email) {
    cy.get(this.inputEmailouNome).type(email);
  }
}
