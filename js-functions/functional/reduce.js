// os elementos do array interagem entre si.

const number = [1,2,3,4,5,6]

const sum = (total, el) => total+el
const total = number.reduce(sum, 100)
console.log(total)

const avg = (acc, el, i, array) => {
    if(i === array.lenght-1) {
        let y = (acc+el)/array.lenght
        return (y) // chegou no ultimo elemento e fará o calculo da media
    } else {
        return acc + el
    }
}

console.log(number.reduce(avg))