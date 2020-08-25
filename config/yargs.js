const ops = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
const argv = require('yargs')
    .command('listar', 'Imprime por consola la tabla de multiplicar', ops)
    .command('crear', 'Crea la tabla de multiplicar como archivo txt', ops)
    .argv;

module.exports = {
    argv
}