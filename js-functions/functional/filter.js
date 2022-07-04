// critério de filtro, percorre cada um dos elementos e verifica se minha condição está verdadeira, se estiver, devolverá em um novo array.

const number = [1,2,3,4,5,6]
const greaterThanZero = el => el > 0
const greaterThanTen = el => el > 10
const even = el => el%2 === 0
console.log(number.filter(greaterThanZero))
console.log(number.filter(greaterThanTen))
console.log(number.filter(even))


const students = [
    {name:'Thomas', score:6.4},
    {name:'Malu', score:8.6},
    {name:'Daniel', score:9.4},
    {name:'Julia', score:9.1},
]

const greatStudent = student => student.score >= 9
console.log(students.filter(greatStudent))