//requires
const colors = require('colors/safe');
const argv = require('./config/yargs').argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(console.log(`Aqui tienes la tabla del ${argv.base} hasta el ${argv.limite}`))
            .catch(err => console.log(err.red));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.red(`Archivo creado ${archivo.green}`)))
            .catch(err => console.log(err.red));
        break;
    default:
        console.log('Comando no reconocido'.yellow);
}




//console.log(argv.base);


//let parametro = process.argv[2];
//let base = parametro.split('=')[1];