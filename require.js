//Importar el archivo por medio del require
const { crearArchivo, listarTabla } = require('./logica/multiplicar');
const argv = require('./config/yargs').argv
const colors = require('colors')

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err));
        console.log('crear');
        break;

    default:
        console.log('El comando ingresado no existe!'.red);
        break;
};