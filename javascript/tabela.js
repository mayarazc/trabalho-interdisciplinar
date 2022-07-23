var timeA = ['Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina'];

var golsA = [1,1,0,2,1,0,1,0,2,4,0,0,1,3,4,1,1,0,2,0,2,2,3,1,7,1,2,4,1,0,1,2,0,2,4,0,1,3,2,2,2,2,1,1,2,0,3,0,1,0,4,0,2,4,2,0,1,0,4,1,0,2,5,1,2,2,2,0,2,2,1,0,0,3,1,3,1,0,0,0,2,2,1,4,1,0,2,4,7,1];

var timeB = ['Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Estrela do Norte','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Real Noroeste-ES','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES','Serra','Serra','Real Noroeste-ES','Estrela do Norte','Vitória','Rio Branco-ES','Vilavelhense','Desportiva','Rio Branco VN-ES','Colatina','Nova Venécia-ES'];

var golsB = [0,3,6,0,0,3,1,0,0,0,1,1,0,0,5,0,1,0,2,0,7,0,1,1,0,2,1,5,0,0,0,0,3,2,1,2,3,0,0,1,2,1,1,4,0,0,1,0,0,0,0,1,0,3,3,1,3,2,2,0,0,2,2,0,3,2,0,0,0,1,3,2,5,1,0,2,1,4,1,0,0,1,0,1,2,2,5,1,0,1];

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
    imgTimeA.src = "../imagens/times/" + timeA[i] + ".png";

    var imgTimeB = document.createElement("img");
    imgTimeB.classList.add("imagem-time");
    imgTimeB.src = "../imagens/times/" + timeB[i] + ".png";
    
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

