const argv = require('yargs')
        .option('b',{
            alias:'base',
            type:'number',
            demandOption:true,
            desc:'Es la base de la tabla de multiplicar'
        })
        .option('l',{
            alias:'listar',
            type:'boolean',
            default:false,
            desc:'Muestra la tabla en consola'
        })
        .option('h',{
            alias:'hasta',
            type:'number',
            default:10,
            desc:'Define el limite de la tabla'
        })
        .check((argv,options) =>{
            if(isNaN(argv.b)){
                throw 'la base tiene que ser un numero';
            }
            return true;
        })
        .argv;

module.exports = argv;