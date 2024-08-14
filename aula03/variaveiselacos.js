//Typeof
let n = 2
let t = "oi"

console.log(typeof n)
console.log(typeof t)

let a = [0, 1, 1, 2, 3, 5, 8, 13, 21]

console.log(typeof a)

let o = {nome: "João", idade: "36"} // JSON
// JavaScript Object Notation
console.log(typeof o)

console.log(a)
console.log(a[6])

a.forEach((el) => 
    console.log(`Elemento: ${el}`)
)

console.log(o)
console.log(o.nome, "tem", o.idade)

/*OBS: 
01 - console.log(typeof <variável>) "Mostra os tipos de Variáveis".

02 - console.log(<variável>) "Roda o conteúdo das variávies".

03 - <variável>.forEach((el) =>
    console.log(`Elemento: ${el}`)
)
*/
