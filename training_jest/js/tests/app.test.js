
//Introducimos la ruta del directorio padre del archivo que vamos a testear
const {sayHello, generateRandInt: random} = require("../app"); 
//Con generateRandInt hemos hecho una desestructuracion añadiendole : random (Ahora la funcion se llama random)

//test comienza por la palabra test
//test espera una descripcion (Que describa el test que se va a testear)
//el test basico espera de segundas una función la cual tiene un expect
// al expect le pasamos un valor (en este caso el devuelto por la funcion sayHello())
//seguido de un .toBe (resultado que se busca/esperado) seguido del valor que esperamos recibir
test("Greetings from Jest", () => {
    expect(sayHello()).toBe("Hello World!!!")
    expect(2+2).toBe(4)
    expect(!0).toBe(true)//Se considera que 0 es false y 1 es true
})

test("Checking object and arrays", () => {
    let data = {
        email: "john@conor.com",
        password: "I'11B3B@ack"
    }
    let numbers = [1, 2, 3]

    expect(data.password).toEqual("I'11B3B@ack");
    expect(Object.keys(data).length).toEqual(2);
    //expect(numbers[numbers.length -1].toEqual(3))
});

test("Checking the opposite or something", () => {
    expect(2 + 2).not.toBe(5);
    expect("hello").not.toBe("world");
    expect(3 % 2).not.toBe(0);
});

test("Cheaking floating numbers", () => {
    //It will fail
    /* expect(0.2 + 0.1).toBe(0.3); */ //falla aunque matematicamente sea correcto
    expect(0.2 + 0.1).toBeCloseTo(0.3); //Sale correcto
});

test("Checking Truthiness", () => {
    let data = [1, true, 3.5, null, undefined];
    expect(data[3]).toBeNull();
    expect(data).toBeDefined();
    expect(data[4]).toBeUndefined();
    expect(data.length == 5).toBeTruthy(); //Comprueba la veracidad de algo
    expect(data[0] == 4).toBeFalsy();
});

test("Checking Strings", () => {
    expect("12345678A").toMatch(/^[0-9]{8,8}[A-Za-z]$/)
                                //^como empieza la expresión regular
                                //el margen de numeros que tiene q salir
                                //Hasta cuantos numeros pueden salir
                                //De que letra a que letra puede salir
                                //$ como termina la expresion regular
    expect("60828be935bf80268d0326b7e1a2c408").toMatch(/[0-9a-f]/i)
});

//Agrupamiento

//con .only le decimos a jest que solo queremos que testee ese test
describe.only("Generar numeros aleatorios entre 2 limites definidos", () => {
    test("Between 1 and 6", () => {
        let min = 1, 
        max = 6,
        number = random(max, min);
        expect(number).toBeGreaterThan(0)
        expect(number).toBeGreaterThanOrEqual(1)
        expect(number).toBeLessThan(7)
        expect(number).toBeLessThanOrEqual(6)
    })
});

describe.each([
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ]
]) ("Generating three random numbers", (num1, num2, num3, num4) => {
    test(`Between ${num2} ${num3}`, () => {
      /*   let min = 1, 
        max = 6, */
        let number = random(num3, num2);
        expect(number).toBeGreaterThan(0);
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThan(7);
        expect(number).toBeLessThanOrEqual(6);
    })
});

