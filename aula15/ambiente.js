/* let num = [5,8,2,9,3]
num[3] = 6 
let ordem = num.sort()
let length = num.length

console.log(`Nosso vetor é o: ${num}, organizado ele fica ${ordem} e o numero de elementos é ${length}`)

for(let pos = 0; pos<num.length; pos++){
    console.log(`A posição [${pos}] tem um valor = ${num[pos]}`)
}

for(let pos in num){
    console.log(num[pos])
}
*/
function procurar (){
    let search = document.getElementById('ifoto')
    let num = [1,2,3,4,5,6]
    let val = Number(search.value)
    let pos = num.indexOf(val)
    if(pos == -1){
        res.innerHTML = 'Valor não encontrado!'
    }else{
        res.innerHTML = `O valor ${val} se encontra na posição ${pos}`
    }
}