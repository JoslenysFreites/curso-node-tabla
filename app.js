// hacer la tabla del 5 en javascript
const { option } = require("yargs");
const { crearArchivo } = require("./helper/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");


console.clear();

//console.log(process.argv);
console.log(argv);
//console.log('Base de yargs:', argv.b);

//const[,,arg3 = 'j = 5'] = process.argv; //estamos tomando el tercer argumento
//const[,j] = arg3.split('='); //separa el string por el caracter =

//console.log(j);

//const j = 6;

crearArchivo(argv.b,argv.l,argv.h).then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado')).catch( err => console.log(err));
















/*const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear();
console.log('==============');
console.log(' Tabla del 5');
console.log('==============');
const j = 5;
let salida = '';
for(i = 1;i<=10;i++){
    salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
}
console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
fs.writeFile(`tabla-del-${j}.txt` , salida, (err) => {
    if(err) throw err;
    console.log(`Tabla del ${j} Creado`);
})*/