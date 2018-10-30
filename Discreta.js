let est = 0;

function estima() {
    var i

    for (i = 0; i < document.estimacao.quan.length; i++) {
        if (document.estimacao.quan[i].checked) {
            break;
        }
    }
    return est = document.estimacao.quan[i].value
}

function total(vet100, vetorLimpo) {

    //  let vetorLimpo = [] //vetor sem repetiçoes
    let cont = 0 //para contar variaveis
    let vetor = [] //vetor de objetos
    let maior = 0 //maior frequencia
    let moda = 0
    //organiza o vetor
    //--------------------------------------------------------------------------------------------
    function diretasort(vet) {
        let aux = 0;
        let menor = 0;

        for (let i = 0; i < vet.length - 1; ++i) {
            menor = i //primeiro atribui o valor para parametro                           
            for (let j = i + 1; j < vet.length; ++j) { // atribui j = a i mais 1
                if (vet[menor] > vet[j]) { //compara as posiçoes
                    menor = j //atribui o indice para troca                    
                }
            }
            aux = vet[menor]
            vet[menor] = vet[i] //troca o menor valor
            vet[i] = aux //troca o maior valor
            //limpa vetor
        }
        /*    vetorLimpo = vet.filter(function (este, i) {
                return vet.indexOf(este) == i;
            })
            */
    }

    //-----------------------------------------------------------
    //chama funçar organizar
    diretasort(vet100)

    //-- clonar objeto
    let obj = {
        variavelPesquisada: '',
        frequencia: '',
        frequenciaPor: '',
        fac: '',
        facPorcentagem: '',
        somaVariavel: '',
        posiçao: ''
    }
    let posi = 1
    // atribui o objeto para as copias
    for (let i = 0; i < vetorLimpo.length; ++i) {
        vetor[i] = Object.assign({}, obj);
        vetor[i].variavelPesquisada = vetorLimpo[i]
        vetor[i].posiçao = posi
        posi++
    }
    // { a: 1 }
    vetor.push(obj)
    //-----------------------------------------------------------------

    //joga frequencia
    for (let x = 0; x < vetorLimpo.length; x++) {
        cont = 0
        for (let y = vet100.length; y >= 0; y--) {
            if (vetorLimpo[x] === vet100[y]) {
                cont++;
            }
        }
        vetor[x].frequencia = cont // jo NO OBJeto

    }
    //-------------------------------------------------------------
    //frequencia acumulada
    let vet3 = [];
    let aux = 0;


    function fac() {
        vet3[0] = vetor[0].frequencia
        aux = vetor[0].frequencia

        for (var x = 0; x < vetorLimpo.length; x++) {

            aux += vetor[x + 1].frequencia;
            vet3[x + 1] = aux
            vetor[x].fac = vet3[x]
        }
        return aux;
    }
    fac() //chama funçao frequencia acumulada


    //---------------------------------------------------------------------
    //calcula a moda
    function funModa() {
        maior = vetor[0].frequencia
        for (let i = 0; i < vetor.length - 1; ++i) {
            // ignorar propriedades herdadas

            if (vetor[i].frequencia >= maior) {
                maior = vetor[i].frequencia;
                moda = vetor[i].variavelPesquisada
            }
        }
        return moda
    }
    funModa()
    //----------------------------------------------------------------
    // Calcular a Média
    let media = 0;

    function funMedia() {

        let divisor = 0;
        let dividendo = 0;

        for (let i = 0; i < vetor.length - 1; i++) {
            dividendo += vetor[i].variavelPesquisada * vetor[i].frequencia;
            divisor += vetor[i].frequencia;
        }
        media = parseFloat((dividendo / divisor).toFixed(2));
        return (media)
    }
    funMedia()
    //-----------------------------------------------------------------------------
    // Calcular Mediana
    let mediana = 0;

    function funMediana() {

        let somatoria = 0;
        let posicao = 0;
        // Calcula a somatória do fi
        for (let i = 0; i < vetor.length; i++) {
            somatoria += vetor[i].frequencia;
        }
        mediana = somatoria / 2;

        // Verifica a posião 
        for (let i = 0; i < vetor.length; i++) {
            if (mediana <= vetor[i].fac) {
                mediana = vetor[i].variavelPesquisada
                break;
            }

        }

        return mediana;
    }
    funMediana()
    //-----------------------------------------------------------------
    //desvio padrao
    let coificiente = 0
    let desvioPadrao = 0
    let aux2 = 0
    let aux3 = 0


    function funDesvio() {
        for (let i = 0; i < vetor.length - 1; ++i) {
            aux2 = parseFloat(vetor[i].variavelPesquisada - media).toFixed(2)
            // tira a media da variavel
            //desvio padrao recebe frequencia - media elevado ao quadrado
            desvioPadrao += parseFloat((Math.pow(aux2, 2) * vetor[i].frequencia).toFixed(2)) //+ desvioPadrao)

        }
        aux3 = desvioPadrao / (aux - est) //auxiliar para receber o desvio
        desvioPadrao = parseFloat(Math.sqrt(aux3).toFixed(2))
        //--------------------------------------------------------------
        //coificiente padrao
        coificiente = Math.round((desvioPadrao / media) * 100)
    }
    funDesvio() //chama funçao desvio padrao

    //CALCULA A O TOTAL DE fi
    let somatoriaFi = 0;

    function somaFi() {
        for (let i = 0; i < vetor.length; i++) {
            somatoriaFi += vetor[i].variavelPesquisada;
            vetor[i].somaVariavel = somatoriaFi
        }
        return somatoriaFi
    }
    somaFi();
    console.log(vetor)
    //Medidas separatrizes
    let Q = 0
    let k = 0
    let param;
    //-------------------------------------------------------------------
    //cria 1 tabela
    var HTML = "<table align=center><tr>";
    HTML += ('<h3 align = center>TABELA</h3>')
    HTML += '<td>Variavel Pesquisada(xi)</td><td>Frequencia(fi)</td>'
    HTML += '<td>Frequencia%(fi%)</td><td>Frequencia Acumulada</td><td>Fac %</td></tr>'
    let totalfac = 0
    for (let linha = 0; linha < vetorLimpo.length; ++linha) {
        //calculos frequencia
        vetor[linha].frequenciaPor = Math.round((vetor[linha].frequencia / vet100.length) * 100)
        vetor[linha].facPorcentagem += Math.round((vetor[linha].fac / vet100.length) * 100)
        totalfac = Math.round(vetor[linha].facPorcentagem)
        //atribuiçao
        HTML += ('<tr>')
        //primeira coluna
        HTML += '<td>' + vetorLimpo[linha] + '</td><td>' + vetor[linha].frequencia + '</td>' //terceira coluna
        //terceira coluna
        HTML += '<td>' + Math.round((vetor[linha].frequencia / vet100.length) * 100) + '%' + '</td>' //quarta coluna
        //quarta coluna
        HTML += '<td>' + parseInt((vetor[linha].fac)) + '</td>'
        //coluna fac porcentagem
        HTML += '<td>' + (vetor[linha].facPorcentagem) + '%' + '</td>'
    }
    HTML += ('<tr><td text="bold">' + 'Total: ' + vetor[vetor.length - 1].somaVariavel + '</td>' + '<td>' + vet100.length +
        '</td>')
    HTML += ('<td>' + totalfac + '%' + '</td>' + '<td>' + vet100.length + '</td><td>' + " " + '</td>')
    HTML += "</tr></table>"; //fecha tabela
    document.getElementById("outTabela").innerHTML = HTML; //atribui no div
    //-------------------------------------------------------------------------
    //resultados------------------------------------------------------------------
    var tbl_resul = "<table align=center > <tr>";
    tbl_resul += ('<h3 align = center>RESULTADOS</h3>')
    tbl_resul += ('<table align = center class="tabela">')
    tbl_resul += ('<tr>')
    tbl_resul += (
        '<td>Media(x)</td><td>Moda(Mo)</td><td>Mediana(Md)</td><td>Desvio Padrao(dx)</td><td>Coificiente Padrão</td>'
    )
    tbl_resul += ('</tr>') //primeira linha
    tbl_resul += ('<tr>')
    //primeira coluna
    tbl_resul += ('<td>' + media + '</td><td>' + moda + '</td>')
    //terceira coluna
    tbl_resul += ('<td>' + mediana + '</td>')
    //quarta coluna
    tbl_resul += ('<td>' + desvioPadrao + '</td>')
    tbl_resul += ('<td>' + coificiente + '%' + '</td>')
    tbl_resul += ('</tr></table>')
    document.getElementById("outResul").innerHTML = tbl_resul; //atribui no div
}