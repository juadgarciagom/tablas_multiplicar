//Requires
const fs = require('fs')

let listarTabla = (base, limite) => {

    for (i = 1; i <= limite; i++) {
        mult = base * i;
        console.log(`${base} * ${i} = ${mult}`);
    }

}

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let contenido = ''

        //Funcion propia de javascript que me valida si base es un número

        if (!Number(base)) {
            reject('Ingrese un número por favor')
            return
        }
        //Tabla de multiplicar

        for (i = 1; i <= limite; i++) {
            mult = base * i
            contenido += `${base} * ${i} = ${mult} \n`
        }

        //Generando un archivo txt 

        fs.writeFile(`C:/Users/juadg/Desktop/Curso programación/Ejercicios Clase/Semana 11/Sesion 1/tablas/tabla-${base}.txt`, contenido, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`El archivo de la tabla ${base} funciona de manera correcta`);
            }
        });

    })
}

//Exportar el archivo por medio del objeto module propio de node.js

module.exports = {
    crearArchivo,
    listarTabla
}