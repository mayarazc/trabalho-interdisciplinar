/*  Nome: Henrique Gutler, Igor Luiz Pereira Butke e Mayara Zanetti Carlini
    Data: De 15/07 à 27/07
    Versão: 1.0
    Descrição: Funcionalidade do filtro de pesquisa que irá mudar para outras páginas, 
    para o trabalho interdisciplinar do tema Campeonato de Futebol Capixaba
 */
var btPesquisar = document.getElementById("btPesquisar");

function pesquisarTime() {
    var filtro = document.querySelector('.inBarraPesquisa');
    var time = filtro.value;
    window.location = "recebido.html?URLtime=" + time; 
}

btPesquisar.addEventListener("click",pesquisarTime);