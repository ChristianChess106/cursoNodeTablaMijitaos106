const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
colors.enable();

console.clear();

// const base = 4;

crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.yellow))
.catch(err => console.log(err));