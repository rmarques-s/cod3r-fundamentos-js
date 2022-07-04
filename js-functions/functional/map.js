//possibilita a transformação do array e devolve exatamente a mesma quantidade.

const number = [1,2,3,4,5,6]
const numberV2 = number.map(el => el *2)
console.log(number, numberV2)


const students = [
    {name:'Thomas', score:6.4},
    {name:'Malu', score:8.6},
    {name:'Daniel', score:9.4},
    {name:'Julia', score:9.1},
]
const getScore = el => el.score
const resultScore = students
    .map(getScore)
    .map(Math.ceil) //arredonda as notas para cima
const getName = al => al.name //pegando apenas os nomes do array
const resultName = students.map(getName)

console.log(`Nomes: ${resultName} 
Notas: ${resultScore}`)