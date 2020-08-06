const fs = require('fs');
const color  = require('colors');


let listarTabla = (base, limit = 10) => {

        console.log('================================='.green)
        console.log(`Tabla de ${base}`.green )
        console.log('================================='.green)

    for (let i = 1; i <= limit ; i++) {
        
        console.log(`${base} * ${i} = ${base * i} \n`);
        
    }

};
// module.exports.crearArchivo la forma de hacerlo en node
 let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un Numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite ; i++) {
            
            data += `${base} * ${i} = ${base * i} \n`; 
            
        }

        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {

            if (err)
                 reject(err)
            else 
                resolve(`tablas/tabla_${base}.txt`);
            
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
