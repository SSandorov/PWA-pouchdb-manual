// Entrenamiento PouchDB

// 1- Crear la base de datos
// Nombre:  mensajes
const db = new PouchDB('mensajes');
const remoteCouch = false;

// Objeto a grabar en base de datos
let mensaje = {
    _id: new Date().toISOString(),
    user: 'spiderman',
    mensaje: 'Mi tía hizo unos panqueques muy buenos',
    sincronizado: false
};

// 2- Insertar en la base de datos
db.put(mensaje)
    .then(console.log('Posteado el mensaje con éxito'))
    .catch(console.log);

// const añadirMensaje = (heroe, mensaje) => {
//     const objeto = {
//         _id: new Date().toISOString(),
//         user: heroe,
//         mensaje: mensaje,
//         sincronizado: false
//     };
//     db.put(objeto)
//         .then(console.log(objeto.mensaje))
//         .catch(console.log);
// };

// const mensaje1 = añadirMensaje("Spiderman", "Mi tía hizo unos panqueques muy buenos");
//const mensaje2 = añadirMensaje("Ironman", "Trabajando en el mk50");


// 3- Leer todos los mensajes offline
// que aparezcan en la consola
db.allDocs({include_docs: true, descending: false})
    .then(doc => {
        console.log(doc.rows);
    });

// 4- Cambiar el valor 'sincronizado' de todos los objetos
//  en la BD a TRUE



// 5- Borrar todos los registros, uno por uno, evaluando
// cuales estan sincronizados
// deberá de comentar todo el código que actualiza
// el campo de la sincronización 





