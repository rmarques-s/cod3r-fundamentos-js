// function declaration


// função sem parâmetros de entrada e não retorna algo:
function sayHello() {
    console.log('Hello!')
}
sayHello()


// função com parâmetros/argumentos de entrada e não retorna algo. Utilizando também com o template string. 
function sayHelloTo(name){
    console.log(`Hello ${name}`)
}

sayHelloTo('Mike')


//função que retorna valor.
function returnHi(){
    return 'Hi!'
}

let greeting = returnHi(); //armazena-se o valor em uma variável para poder imprimir. constantes e variáveis também é possível.
console.log(greeting);
console.log(returnHi()); //pode-se chamar a função diretamente dentro do console.


//função que tanto recebe parâmetro quanto retorna um valor.
function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo('Malu'));