let num = document.getElementById('inum')
let res = document.getElementById('resultado')
let lista = []


function adicionar(){
    if (num.value < 1 || num.value > 100 || num.value.length == 0) {
        alert('[ERRO] Verifique se os valores estão entre 1 e 100.')
    } else {
        lista.push(num)
        res.innerHTML = `${lista.length}`
    }
}
