// anonymous functions = função que não possui nome
// IIFE = Immediately Invoked Function Expression = usa-se quando precisa-se garantir que determinados valores estão guardados dentro de escopos mais restritos

(function (a, b, c) {
    let x = 3
    console.log(`result: ${a+b+c}`)
    console.log(x)
})(1,2,3);

(function () {
    let x = 300
    console.log(x)
})();

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();