var vel = 110
var limite = 100
var dif = vel - limite
console.log(`a velocidade do seu carro é ${vel}Km/h`)
if (vel > limite){
    console.log(`Voce ultrapassou a velocidade permitida, MULTADO CORNO`)
    console.log(`Sua velocidade foi de ${dif}Km/h acima do limite`)
}
else{
    console.log(`Tudo certo com sua velocidade, dirija com atenção e boa viagem :D`)
}
