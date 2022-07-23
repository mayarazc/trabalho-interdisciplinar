function pesquisarTime() {
    var filtro = document.querySelector('.barra-pesquisa');
    var time = filtro.value;
    var flag = false

    for (var i = 0 ; i < 10 && flag == false ; i++){
        if(time == timeA[i]){
            window.location = "recebido.html?URLtime=" + time; 
            flag = true;
        } else{
            window.location = "erro.html";
        }
    }
    
}


