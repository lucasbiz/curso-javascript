function verificar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if (Number(fano.value) <= 0 || Number(fano.value) >= ano ) {
        alert('[ERRO] Verifique os dados digitados e tente novamente!')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(sex[1].checked){
            genero = 'Homem'

        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `Você é ${genero} de ${idade} anos.`


    }


    
}