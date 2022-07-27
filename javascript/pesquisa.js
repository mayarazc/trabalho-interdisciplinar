function pesquisarTime() {
    var filtro = document.querySelector('.barra-pesquisa');
    var time = filtro.value;
    var timeEncontrado = false; // flag para parar a repetição quando o time for encontrado

    for (var i = 0 ; i < 10 && timeEncontrado == false ; i++){

        if(time == timeA[i]){
            window.location = "recebido.html?URLtime=" + time; 
            timeEncontrado = true;

        } else{
            window.location = "erro.html";
        }
    }
}


