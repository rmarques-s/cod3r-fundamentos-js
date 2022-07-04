// create a range function
function range(a, b, s=1){
    const n1 = b === undefined ? 1 : a //n1 depende do valor de b, que se for undefined, ele será 1. caso o b não seja, o n1 assumirá o valor do parametro a.
    const n2 = b === undefined ? a : b //se b for undefined, n2 será o valor da variável a. caso conrário, valerá o valor de b.
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s) // se o valor de n1 for menor ou igual ao valor de n2, o valor de step será sempre será positivo. Caso n1 > n2, obrigatoriamente o step será negativo.

    const nums = []
    for(let i=n1; n1 <= n2 ? i<=n2 : i >= n2; i+= step){
        nums.push(i)
    }
    return nums
}
// range(5) -> [1,2,3,4,5]
console.log(range(5))
// range(6,11) -> [6,7,8,9,10,11]
console.log(range(6,11))
// range(10,19,2) -> [10,12,14,16,18]
console.log(range(10,19,2))
// range(6,2) -> [6,5,4,3,2]
console.log(range(6,2))
// range(8,-3,4) -> [8,4,0]
console.log(range(8,-3,4))

/* OBS do código. Math.abs = gera sempre um valor positivo 

for(let i=n1; n1<=n2 ? i<=n2 : i>=n2; i+= step) = começa-se o valor a partir de n1 | se o valor de n1 for menor ou igual ao valor de n2, caso contrário a lógica será maior ou igual a n2 (precisa-se decrementar)| o step incrementa de acordo com o valor de s

*/