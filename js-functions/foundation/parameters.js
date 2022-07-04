function logParams(a, b, c){
    console.log(a, b, c);
}

logParams(1, 2, 3, 4, 5); // não gera problema com parametros adicionais, o js apenas os ignora
logParams(1,2) //se não estiver todos os parametros, o valor não definido será um valor undefined
let x = logParams(1,2)
console.log(x) //valor undefined pois a função não está retornando nada

//definindo valor padrão em um parâmetro
function defaultParams(a=1,b=2,c=3){
    console.log(a,b,c)
}
defaultParams(7,8,9)
defaultParams(7,8)
defaultParams(7)

// como passar valores de formas flexiveis em arrays + operador spread/rest = '...' função recebe quantidade variável de parâmetros, e todos estes serão armazenados dentro de uma função
function logNums(...nums){
    console.log(nums)
}
logNums(1,2,3,4,5,6)

// função para somar todos os números
function sumAll(...nums){
    let total = 0
    for(let n of nums){
        total += n
    }
    return total
}
console.log(sumAll(1,2,3));