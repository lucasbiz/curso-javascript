var ini = document.getElementById('ini')
var fim = document.getElementById ('fim')
var pas = document.getElementById('pas')
var res = document.getElementById('res')


function contagem(){
    if (ini.value.length < 1 || fim.value.length < 1 || pas.value.length < 1){window.alert('[ERRO] Todos os campos devem ser preenchidos!')} else if (pas.value == 0){window.alert('[ERRO]O valor de passos não pode ser 0!')} else{
        var cont = ''
        while(cont <= fim){
            cont = Number(ini.value) + Number(pas.value)
        }
    }
}