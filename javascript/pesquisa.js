function pesquisarTime() {
    var filtro = document.querySelector('.barra-pesquisa');
    var time = filtro.value;
    window.location = "recebido.html?URLtime=" + time; 
}

