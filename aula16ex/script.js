let num = document.getElementById('inum')
let res = document.getElementById('resultado')
let lista = []
let selec = document.getElementById('seladd')


function adicionar(){
    let numero = Number(num.value)
    if(num.value.length == 0){
        alert('[ERRO] É necessário adicionar ao menos um número!')

    } else if (num.value < 1 || num.value > 100){
        alert('[ERRO] Verifique se os valores estão entre 1 e 100.')

    } else if (lista.indexOf(numero) != -1) {
        alert('Esse número já foi adicionado!')

    } else {
        let op = document.createElement('option')
        lista.push(numero)
        op.text = `Número ${numero} adicionado!`
        selec.appendChild(op)
    }
}

function finalizar(){
    res.innerHTML = ''
    if (num.value.length == 0){alert('[ERRO] É necessário adicionar ao menos um número!')
    }else {
        let tam = Number(lista.length)
        let result = document.createElement('p')
        let plural = 'números'
        if (tam == 1) {plural = 'número'}
        result.textContent = `Você inseriu ${tam} ${plural}!`
        res.appendChild(result)
    }
}