//Version de código minima para montar un servidor HTTP con Nodejs


require("dotenv").config()
console.log(process.env);

//Importamos el módulo HTTP incorporado de Node.js para poder utilizarlo en el código.
const http = require ("http");
//Definimos la dirección IP que utilizará el servidor. En este caso, se está utilizando la dirección IP local de la máquina, que es "127.0.0.1".
const hostName = "127.0.0.1";
// Este código define el puerto que utilizará el servidor. En este caso, se está utilizando el puerto "8000".
const port = "8000";
//Esta línea crea un servidor HTTP utilizando el método createServer() proporcionado por el módulo HTTP. Dentro de la función de devolución de llamada ((req, res) => { ... })
//se establecen los comportamientos que tendrá el servidor al recibir una solicitud. En este caso, la función de devolución de llamada escribirá un mensaje en la consola y devolverá un mensaje de "Hello, World!".
const server = http.createServer ((req, res) => {
    //Este comando escribe en la consola las claves de todas las propiedades del objeto req (la solicitud entrante). Esto se utiliza principalmente para fines de depuración.
    console.log(Object.keys(req));
    // Este comando escribe en la consola el método HTTP que se está utilizando en la solicitud entrante (por ejemplo, GET, POST, etc.).
    console.log("Method", req.method);
    //Este código establece el código de estado de la respuesta HTTP en 200, lo que indica que la solicitud fue procesada con éxito.
    res.statusCode = 200;
    //Aquí se establece el tipo de contenido de la respuesta HTTP en "text/plain", lo que indica que la respuesta contiene texto simple.
    res.setHeader("Content-Type", "text/plain");
    //Finalmente, esta línea envía la respuesta HTTP de vuelta al cliente con el mensaje "Hello, World!".
    res.end("Hello, Wolrd!")
});
//Este comando inicia el servidor HTTP y lo hace escuchar en el puerto y dirección IP especificados. La función de devolución de llamada muestra un mensaje en la consola cuando el servidor se ha iniciado correctamente.
server.listen(port, hostName, () => {console.log(`Server runing at http://${hostName}:${port}`)});