var ini = document.getElementById('ini')
var fim = document.getElementById ('fim')
var pas = document.getElementById('pas')
var res = document.getElementById('res')


function contagem(){
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){window.alert('[ERRO] Todos os campos devem ser preenchidos!')} else if (pas.value <= 0){window.alert('[ERRO]O valor de passos não pode ser 0 ou negativo!')} else{

        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (i<=f){

            while(i <= f){

                res.innerHTML += `${i} > `
                i = i + p
            }
        } else
            while(f <= i){
                res.innerHTML += `${i} > `
                i = i - p
            }
        
        }
        res.innerHTML += 'Fim!'

    }

