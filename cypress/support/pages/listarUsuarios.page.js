export default class ListarPage {
  listaUsuarios = ".sc-bXCLTC.jykigL";
  inputEmailouNome = ".sc-gsFSXq";
  userDataDetalhes = ".sc-ikkxIA.iTvMOa";
  paginacaoListaUsuarios = "#paginacaoAtual";
  paginacaoProximo = "#paginacaoProximo";
  paginacaoVoltar = "#paginacaoVoltar";
  userDataEmail = '[data-test="userDataEmail"]';
  buttonDetalhes = "#userDataDetalhe";
  buttonRemover = ".sc-fUnMCh.dttKkA";
  novoUsuario = ".sc-bmzYkS";

  clikButtonProximo() {
    cy.get(this.paginacaoProximo).click();
  }
  clikButtonVoltar() {
    cy.get(this.paginacaoVoltar).click();
  }

  typeNomePesquisa(name) {
    cy.get(this.inputEmailouNome).type(name);
  }
  typeEmailPesquisa(email) {
    cy.get(this.inputEmailouNome).type(email);
  }
  postNovoUsuario() {
    cy.get(this.novoUsuario).click();
  }
}
