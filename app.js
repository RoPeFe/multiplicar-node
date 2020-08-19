const argv = require('./config/yargs').argv;
const color = require('colors');
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
        
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then( archivo => console.log(`El archivo ${archivo} ha sido creado`))
        .catch( e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
const base = argv.base;

