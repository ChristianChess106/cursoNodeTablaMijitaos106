const fs = require('fs');
const colors = require('colors');
colors.enable();

const crearArchivo = async(base = 2, listar = false, hasta = 10) =>{
    
    let salida = '';
    let consola = '';
    try {
        
        for (let i = 1; i <= hasta; i++) {
            
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${colors.yellow('x')} ${i} = ${colors.cyan(base * i)}\n`;
            
        }
        
        if(listar){
            console.log('========================='.green);
            console.log('      Tabla del:'.yellow, base   );
            console.log('========================='.green);
            console.log(consola);    
        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt creado`;
        
    } catch (error) {
        throw error;
    
}};

module.exports = {
    crearArchivo
}