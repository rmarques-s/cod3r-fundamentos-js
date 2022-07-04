// anonymous functions = função que não possui nome
(function (a, b, c){
    return a+b+c;
})

// function expression = atribuir o valor de uma função à uma variável
var sum = function(a,b){
    return a+b
}

const result = sum(1,1)
console.log(result)