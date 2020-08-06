const { argv } = require('./config/yargs');
const   color  = require('colors');

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar"); 

let comando = argv._[0];

switch (comando) {
    case 'listar':
            listarTabla(argv.base, argv.limite);
            console.log('Listar')
    break;
    
        case 'crear':
            crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.red}`))
            .catch(console.log)
                        console.log('Crear')
        break;

    default:
        console.log('Comando no Reconocido')
        break;
}


// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];



// console.log(argv)
// console.log(argv.limite)

// console.log(argv2);

