function mostrarTabela(){

    for (let i = 0; i < timeA.length; i++) {
        // seleciona a classe .tabela que foi criada no html e guarda numa variável
        var tabela = document.querySelector(".tabela");
    
        // linhas da tabela (só uma basta pois irá se repetir até o loop acabar)
        var tr = document.createElement("tr");
    
        // colunas da tabela
        var tdTimeA = document.createElement("td");
        var tdTimeB = document.createElement("td");
        var tdGols = document.createElement("td");
    
        // texto com o nome dos times
        var textoTimeA = document.createElement("p");
        var textoTimeB = document.createElement("p");
    
        // paragráfo que guarda a imagem e o texto de cada time
        var pTimeA = document.createElement("p");
        var pTimeB = document.createElement("p");
    
        var gols = document.createElement("p");
    
        // cria um elemento de img, uma classe para estilização no css e seleciona as imagens de cada time
        var imgTimeA = document.createElement("img");
        imgTimeA.classList.add("imagem-time");
        imgTimeA.src = "imagens/times/" + timeA[i] + ".png";
    
        var imgTimeB = document.createElement("img");
        imgTimeB.classList.add("imagem-time");
        imgTimeB.src = "imagens/times/" + timeB[i] + ".png";
        
        textoTimeA.textContent = timeA[i];
        textoTimeA.classList.add("nome-time");
    
        gols.textContent = golsA[i] + " X " + golsB[i];
        gols.classList.add("gols");
    
        textoTimeB.textContent = timeB[i];
        
        // inserindo no html
        pTimeA.appendChild(imgTimeA);
        pTimeA.appendChild(textoTimeA);
    
        pTimeB.appendChild(imgTimeB);
        pTimeB.appendChild(textoTimeB);
    
        tdTimeA.appendChild(pTimeA);
        tdGols.appendChild(gols);
        tdTimeB.appendChild(pTimeB);
    
        tr.appendChild(tdTimeA);
        tr.appendChild(tdGols);
        tr.appendChild(tdTimeB);
        tabela.appendChild(tr);
    }    

}


