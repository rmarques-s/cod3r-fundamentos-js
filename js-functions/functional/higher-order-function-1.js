// functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

//passando função como parâmetro pra outra
function Run(fn){
    return `Result: ${fn()}` //criando string para interpolar
}

function sayHello(){
    console.log('Hello!!')
}

Run(sayHello) //passando referência de sayHello para dentro de run.

Run(function(){ // chamando função run e declarando função anônima como parâmetro no momento de chamar.
    console.log('run!!!')
})

Run(Math.random) //usando uma função de refêrencia para a função run, que retornará o valor gerado.

const result = Run(Math.random)
console.log(result)