function mostrarTime() {
    var URLtime = new URLSearchParams(window.location.search);
    var time = URLtime.get('URLtime');
    var titulo = document.querySelector(".titulo");
    titulo.textContent = time;
    var pontuacao = 0;
    var qtdGols = 0;
    var qtdSofrido = 0;
    var vitoria = 0;
    var empate = 0;
    var derrota = 0;


    for (let i = 0; i < timeA.length; i++) {
        if (time == timeA[i] || time == timeB[i]) {

            if (time == timeA[i]) {

                qtdGols += golsA[i];
                qtdSofrido += golsB[i];
                

                if (golsA[i] > golsB[i]) {
                    vitoria++;

                } else if (golsA[i] == golsB[i]) {
                    empate++;

                } else {
                    derrota++;
                }

            } else {

                qtdGols += golsB[i];
                qtdSofrido += golsA[i];

                if (golsB[i] > golsA[i]) {
                    vitoria++;

                } else if (golsB[i] == golsA[i]) {
                    empate++;

                } else {
                    derrota++;
                } 
            }


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
    pontuacao = (vitoria * 3 + empate);

                     // -------------------------- relatorio ----------------------------------- // 

    var relatorio = document.querySelector(".relatorio");

    //var trTitulo = document.createElement("tr");
    //trTitulo.classList.add("tr-relatorio");

    var trDados = document.createElement("tr");
    trDados.classList.add("linha-relatorio");

    // colunas da tabela
    var tdTime = document.createElement("td");
    var tdPontuacao = document.createElement("td");
    var tdVitorias = document.createElement("td");
    var tdEmpates = document.createElement("td");
    var tdDerrotas = document.createElement("td");
    var tdGolsP = document.createElement("td");
    var tdGolsC = document.createElement("td");
    var tdSaldoGols = document.createElement("td");

    // cria os dados
    var pPontuacao = document.createElement("p");
    pPontuacao.textContent = pontuacao;

    var pVitorias = document.createElement("p");
    pVitorias.textContent = vitoria;

    var pEmpates = document.createElement("p");
    pEmpates.textContent = empate;

    var pDerrotas = document.createElement("p");
    pDerrotas.textContent = derrota;

    var pGP = document.createElement("p");
    pGP.textContent = qtdGols;

    var pGC = document.createElement("p");
    pGC.textContent = qtdSofrido;

    var pSaldo = document.createElement("p");
    pSaldo.textContent = qtdGols - qtdSofrido;

    // cria imagem do time
    var imgTime = document.createElement("img");
    imgTime.classList.add("imagem-time-rel");
    imgTime.src = "imagens/times/" + time + ".png";

    tdSaldoGols.appendChild(pSaldo);
    pSaldo.classList.add("dados");

    tdGolsC.appendChild(pGC);
    pGC.classList.add("dados");

    tdGolsP.appendChild(pGP);
    pGP.classList.add("dados");

    tdDerrotas.appendChild(pDerrotas);
    pDerrotas.classList.add("dados");

    tdEmpates.appendChild(pEmpates);
    pEmpates.classList.add("dados");

    tdVitorias.appendChild(pVitorias);
    pVitorias.classList.add("dados");

    tdPontuacao.appendChild(pPontuacao);
    pPontuacao.classList.add("dados");

    tdTime.appendChild(imgTime);

    trDados.appendChild(tdTime);
    trDados.appendChild(tdPontuacao);
    trDados.appendChild(tdVitorias);
    trDados.appendChild(tdEmpates);
    trDados.appendChild(tdDerrotas);
    trDados.appendChild(tdGolsP);
    trDados.appendChild(tdGolsC);
    trDados.appendChild(tdSaldoGols);

    relatorio.appendChild(trDados);
}

