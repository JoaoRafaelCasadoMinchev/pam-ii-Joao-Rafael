
//Código para testar se o número escrito pelo usuário é Impar ou Par.

/*
//Exemplo 01 (Com return e else)
const TesteImparPar = (n) => {
    let calculoTeste = n % 2
    
    if(calculoTeste == 1) {
        return "Número Ímpar"
    } else {
        return "Número Par"
    }
}

console.log(TesteImparPar(17))
console.log(TesteImparPar(64))
console.log(TesteImparPar(1500))
*/

/*
//Exemplo 02 (Com variável)
const TesteImparPar = (n) => {
    let calculoTeste = n % 2
    let msg = ""


    if(calculoTeste == 1) {
        msg = "Número Ímpar"
    } else {
        msg = "Número Par"
    }

    return msg
}

console.log(TesteImparPar(17))
console.log(TesteImparPar(64))
console.log(TesteImparPar(1500))
*/

/*
//Exemplo 03 (Sem o Else)
const TesteImparPar = (n) => {
    let calculoTeste = n % 2

    if(calculoTeste == 1) {
        return "Número Ímpar"
    }
    
    return "Número Par"

}

console.log(TesteImparPar(17))
console.log(TesteImparPar(64))
console.log(TesteImparPar(1500))
*/

/*
//Exemplo 04 (Sem else com variável)
const TesteImparPar = (n) => {
    let calculoTeste = n % 2
    let msg = ""


    if(calculoTeste == 1) {
       return msg = "Número Ímpar"
    }
    msg = "Número Par"
    return msg
}

console.log(TesteImparPar(17))
console.log(TesteImparPar(64))
console.log(TesteImparPar(1500))
*/

//Exemplo 05 (Fala do Professor: Se pequeno melhor ainda!!)
// (Tirar else e optimizando o código)
const TesteImparPar = (n) => {
    let calculoTeste = n % 2
    
    return (calculoTeste == 1) ? "Número Ímpar" : "Número Par";

}

console.log(TesteImparPar(17))
console.log(TesteImparPar(64))
console.log(TesteImparPar(1500))