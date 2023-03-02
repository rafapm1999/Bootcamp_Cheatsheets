
//Introducimos la ruta del directorio padre del archivo que vamos a testear
const sayHello = require("../app");

//test comienza por la palabra test
//test espera una descripcion
//el test basico espera de segundas una función la cual tiene un expect
// al expect le pasamos un valor (en este caso el devuelto por la funcion sayHello())
//seguido de un .toBe (resultado que se busca/esperado) seguido del valor que esperamos recibir
test("Greetings from Jest", () => {
    expect(sayHello()).toBe("Hello World!!!")
})