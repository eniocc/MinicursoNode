module.exports = (a, b, callback) => {
    if (a <= 0 || b <= 0) {
        const mensagem = `erro: as dimensões devem ser maiores do que zero`
        setTimeout(() => {
            callback(new Error(mensagem), null)
        }, 2000)
    } else {
        setTimeout(() => {
            callback(null, { perimetro: (a, b) => (2 * (a + b)), area: (a, b) => (a * b) })
        }, 2000)
    }
}