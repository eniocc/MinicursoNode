let Computador = require('./computador.js')

var computadores = [
    new Computador("10.000", "Macbook X", "**"),
    new Computador("15.000", "Macbook XI", "**"),
    new Computador("12.000", "Notebook Vaio", "*"),
    new Computador("11.000", "Notebook HP", "**"),
    new Computador("1.000", "Notebook Avell", "**"),
    new Computador("5.000", "Macbook XI", "****"),
    new Computador("3.000", "Workstation HP", "***"),
    new Computador("12.000", "Servidor HP", "**"),
    new Computador("90.000", "Servidor HP", "****"),
    new Computador("120.000", "Servidor DELL", "*****"),
]

for(let i =0; i < computadores.length; i++){
    console.log(computadores[i].imprimir_dados());
}
//