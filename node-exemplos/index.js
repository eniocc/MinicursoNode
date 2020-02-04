var retangulo = require('./rectangle')

function calcula(a, b) {
    console.log(`calculando retângulo com altura = ${a} e base = ${b}`)
    retangulo(a, b, (err, res) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log(`a área do retângulo é ${res.area(a, b)}`)
            console.log(`e o perímetro é ${res.perimetro(a, b)}`)
        }
    })
}


calcula(2, 4)
calcula(3, 5)
calcula(0, 5)
calcula(-3, 5)