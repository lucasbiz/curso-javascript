/* var idade = 2
if(idade > 60){
    console.log('Você é idoso')
} else if(idade < 18){
        console.log('Você não é adulto')
} else{
        console.log('Você é adulto, fodase kkkk')
    }

*/
var agora = new Date()
var hora = agora.getHours()
var plur = 'hora'
if(hora >= 10){
    var plur = 'horas'
}
console.log(`Agora são exatamente ${hora} ${plur}`)

if (hora <= 12){
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}