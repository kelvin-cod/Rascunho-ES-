//Variaveis
let Xindependente = [36, 43, 49, 55, 61, 63, 69, 72, 74, 77];
let Ydependente = [350, 330, 296, 252, 230, 218, 203, 196, 188, 167];
let teste = []
//Função somatoria
function Somatoria(vet) {
    let soma = 0;
    for (let i = 0; i < vet.length; i++) {
        soma += vet[i];
    };
    return soma
}


//Função somatória de X x Y
function SomatoriaXeY(vet, vet2) {
    let soma = 0;
    for (let i = 0; i < vet.length; i++) {
        soma = (vet[i] * vet2[i]) + soma;
    };
    return soma
}


//Função Somatoria do quadrado da variaveis
function SomatoriaQuadrado(vet) {
    let soma = 0;
    for (let i = 0; i < vet.length; i++) {
        soma = Math.pow(vet[i], 2) + soma;
    };
    return soma

}

//Função para achar o coeficiente da Correlação
function Correlacao() {
    //Variavel Coeficiente
    let r = 0;

    let dividendo = ((Xindependente.length) * SomatoriaXeY(Xindependente, Ydependente) - (Somatoria(Xindependente) * Somatoria(Ydependente)))
    let divisor = ((Xindependente.length) * SomatoriaQuadrado(Xindependente) - (Math.pow(Somatoria(Xindependente), 2))) * ((Xindependente.length) * SomatoriaQuadrado(Ydependente) - (Math.pow(Somatoria(Ydependente), 2)))
    r = parseFloat((dividendo / Math.sqrt(divisor)).toFixed(2))
    return r
}


//Função da regreção
function regressao() {
    let dividendo = ((Xindependente.length) * SomatoriaXeY(Xindependente, Ydependente) - (Somatoria(Xindependente) * Somatoria(Ydependente)))
    let divisor = ((Xindependente.length) * SomatoriaQuadrado(Xindependente) - (Math.pow(Somatoria(Xindependente), 2)))
    let a = parseFloat((dividendo / divisor).toFixed(2))
    let Ymedia = Somatoria(Ydependente) / Ydependente.length
    let Xmedia = Somatoria(Xindependente) / Xindependente.length

    let b = Ymedia - a * Xmedia
    let x = 100
    let ydemanda = parseFloat((a * x + b).toFixed(2))

    return ydemanda
}
//formula M
//(N * SomatoriaXeY) - (somatoriax * somatoriay) / ((N * xquadrado) - (Math.pow(somatoriax)))

//formuyla b
//(xquadrado * somatoriay) - (somatoriax * SomatoriaXeY) / ((N * xquadrado) - (Math.pow(somatoriax)))