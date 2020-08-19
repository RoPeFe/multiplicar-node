const fs = require('fs');
const color = require('colors');

const listarTabla = (base, limite = 10) => {

    console.log('======================================='.green);
    console.log(`============= Tabla del ${base} =============`.green);
    console.log('======================================='.green);

    if (!Number(base)) {
        console.log('El valor introducido no es un número');
    } else {
        for (let i = 1; i <= limite; i++) {
            console.log(`${base}*${i} = ${base * i}`);
        }
    }
};

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es un número');
            return;
        }

        let data = '';
        
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, err => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`)
            }
        });
    });
};

module.exports = {
    listarTabla,
    crearArchivo,
}