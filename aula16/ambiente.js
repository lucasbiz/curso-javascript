function soma(n1, n2){
    return n1 + n2
}

console.log(soma(1,2))


//definindo valores prévios para os parametros evitamos dar resultados como NaN
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(1,))


//função dentro de uma variável
let v = function(x){
    return x*2
}
console.log(v(5))

//cálculo de fatorial
