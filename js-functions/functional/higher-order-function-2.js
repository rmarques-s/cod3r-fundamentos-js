// curring

// focando na segunda parte da definição, mostrando como é possível retornar uma função a partir de uma função

//a vantagem é para quando já se há um parâmetro fixo indicado para alguma função

function finalPrice(tax){
    return function(price){
        return price * (1+tax)
    }
}

const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.7))
console.log(nycFinalPrice(107.9))