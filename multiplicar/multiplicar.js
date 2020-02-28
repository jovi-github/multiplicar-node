//required

const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let x = 1; x <= limite; x++) {

            data += (`${base} * ${x} =  ${base * x}, \n`);
        }

        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else

                resolve(`tabla-${base}`);
        });

    });
}

let listarTabla = (base, limite = 10) => {
    //mostar en consola la tabla de multiplicar en función de la base y el límite

    console.log('======================='.green);
    console.log(`======= ${base} x ${limite} ========`.yellow);
    console.log('======================='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido para la base "${base}" no es un número`);
        } else if (!Number(limite)) {
            reject(`El valor introducido para el limite "${limite}" no es un número`);
        }

        let data = '';

        for (i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base * i}\n`);

        }

        resolve(console.log(data.yellow));

    })
}


module.exports = {
    crearArchivo,
    listarTabla

}