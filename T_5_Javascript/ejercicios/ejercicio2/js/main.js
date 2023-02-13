//Apartado 1
const arrayString = ["1", "2", "3", "4", "5"];
console.log(arrayString);

//Apartado 2
const arrayNumber = [];
console.log(`El array: ${arrayNumber}, y su longitud es: ${arrayNumber.length}`);
arrayNumber.push(1, 2, 3);
console.log(`El array: ${arrayNumber}, y su longitud es: ${arrayNumber.length}`);
arrayNumber.splice(0, 2);
console.log(`El array: ${arrayNumber}, y su longitud es: ${arrayNumber.length}`);
arrayNumber.unshift(4, 5);
console.log(`El array: ${arrayNumber}, y su longitud es: ${arrayNumber.length}`);

//Apartado 3
function booleanComprove (e) {
    if (e === Boolean(e)) {
        return true;
    } else {
        return false;
    }
}
//Solución del vídeo:
// function isBool (value) {
//     return typeof value === "boolean";
// }

//Apartado 4
function lengthFunction (e) {
    let str = String(e);
    return str.length;
}
//Solución del vídeo:
// const lengthString = string => string.length;

//Apartado 5
const secondMinute = (e) => e * 60;
console.log(secondMinute(1));

//Apartado 6
function parNumber (e) {
    if ( e % 2 == 0){
        return e;
    } else {
        return e + 1;
    }
}

//Apartado 7
function daysLived (e) {
    let day = e * 365;
    return day;
}
console.log(`Has vivido ${daysLived(23)} días.`);

//Apartado 8
// function lengthOfArray (e) {
//     console.log(Array(e));
//     let array = Array(e);
//     console.log(array.splice(0, e.length));
// }
const returnLastElement = array => array[array.length -1];

//Apartado 9
function countLegs (chicken, cows, pigs) {
    let totalLegs = (chicken * 2) + (cows * 4) + (pigs * 4);
    return totalLegs;
}

//Apartado 10
function similarInfo (a, b) {
    if (typeof a === typeof b) {
        return `Son el mismo tipo.`
    } else {
        return `No son el mismo tipo`
    }
}
//Solucion del vídeo: (Funcion con valor ternario)
function equalDat (a, b) {
    return (typeof a === typeof b) ? `Son el mismo tipo` : `No son el mismo tipo`;
}

//Apartado 11
function separateString (e) {
   return e.split(" ");
}

//Apartado 12
let address1 = {
    provincia: "Malaga",
    ciudad: "Jaen",
    municipio: "Madrid",
    códigoPostal: 26790,
    calle: "Avenida Rojo",
    numero: 50,
    planta: 2,
    numeroPuerta: 3 
}
let address2 = {
    provincia: "Malaga",
    ciudad: "Jaen",
    municipio: "Madrid",
    códigoPostal: 26799,
    calle: "Avenida Rojo",
    numero: 52,
    planta: 1,
    numeroPuerta: "A" 
}

//Apartado 13
function parseDomain (e) {
    let array = e.split(".");
    object = {
        domain: array[0],
        tld: array[1]
    }
    return object;
}
//Solución del vídeo:
//const parseDomain = domainString => {
//     return{
//         domain: domainString.split(".")[0], 
//         tld: domanString.split(".")[1]
//     }
// };
//Apartado 14
function strictEquality (a, b) {
    if (a == b && typeof a == typeof b) {
        return true;
    } else {
        return false;
    }
}
//solución del video:
// const strictEquality = (num1, num2) => (num1 == num2) && (typeof num1 == typeof num2);

//Apartado 15
const equalStringLength = (a, b) => (a.length === b.length) && (typeof a === typeof b);
//Solución del video:
//const equalStringLength = (a, b) => (a.length === b.length);

//Apartado 16
//const stringLengthNoLength = (str) {return a === "" || a === undefined};
//Solución del vídeo:
const stringLengthNoLength = (str) => (str) ? `Tiene contenido` : `No tiene contenido`;

//Apartado 17
let count = 0;
while (count < arrayString.length ) {
    console.log(`El indice ${count} es ${arrayString[count]}`);
    count++;
};
for (let e = 0; e < arrayString.length; e++){
    console.log(`El indice ${e} es ${arrayString[e]}`);
}
for (let oneArrayString of arrayString) {
    console.log(oneArrayString);
}
arrayString.forEach(function (element, index) {console.log(`El indice ${index} es ${element}`)});

//Apartado 18
function repeatString (a) {
    let str = "No haré memes del profesor. ";
    return str.repeat(a);
} 

//Apartado 19
const getVoteCount = function (obj) {
    return obj.upVotes + obj.downVotes;
}
const votes = {upVotes: 35, downVotes: 15};
console.log(getVoteCount(votes));
console.log(getVoteCount({upVotes: 35, downVotes: 15}));

//Apartado 20
function typeOfArray(array) {
    const arrayTypes = [];
    array.forEach(element => {
        arrayTypes.push(typeof element);
    })
    return arrayTypes;
}
const testArray = ["hola", 1, 1.3, true, [1], object = {}];
console.log(typeOfArray(testArray));

//Apartado 21
function getParsedNumbers (array) {
    const parsingArray = [];
    array.forEach(element => {
        parsingArray.push(Number(element));
    })
    return parsingArray;
}
const testNumberArray = ["1", "2", "3"];
console.log(getParsedNumbers(testNumberArray), typeof getParsedNumbers(testNumberArray)[0] );

//Apartado 22
const isPositive = (a) => a >= 0 ? `Es positivo` : `Es negativo`;
console.log(isPositive(1));
console.log(isPositive(-1));

//Apartado 23
const removeItem = (array, index) => array.splice(index, 1);

//Apartado 24
const filterItem = (array, numberToFilter) => {
    array.forEach((element, index) => {
        if (element === numberToFilter) {
            removeItem(array, index);
        }
    });
};
const arrayFiltered = [1, 5, 6, 7, 5];
filterItem(arrayFiltered, 5);
console.log(arrayFiltered);

//Solución del vídeo: (vid. 39)
function filterItem (array, numberToFilter) {
    for (let i = array.length -1; i >= 0; i--){
        if (array[i] === numberToFilter) {
            removeItem(array, i);
            i--;
        }
    }
    return array
}

//Apartado 25
function propertyArray ( object ) {
    return Object.keys(object);
}

let objectEj25 = {
    profesor : "Manolo",
    alumno1 : "Juan",
    alumno2 : "pepe",
    alumno3 : "rafa"
}

console.log(propertyArray(objectEj25));

let valueArray = object => {Object.values(object)};

//Apartado 26

function stringReverse (string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string.charAt(i)
    }
    return reversedString;
}
console.log(stringReverse("No abusaré del café en las tardes de programación."));

//Otra solución del video:
 function stringInvertido (texto) {
    return texto.split('').reverse().join('');
 }
 console.log(stringInvertido("No abusaré del café en las tardes de programación."));

 //Otra solucion:
 const stringReverse2 = string => {
    let reversed = "";
    for (let character of string) {
        reversed = character.concat(reversed);
    }
    return reversed;
 }

 //Apartado 27
 function compareStrings (a, b) {
        return a.toLowerCase() === b.toLowerCase()
    }
console.log(compareStrings("hola", "HoLa"));

//Apartado 28

//Solucion del video
function capitalize(string) {
    let upperCheck = true;
    let capitalizedString = '';
    for (const character of string) {
        if (upperCheck) {
            capitalizedString = capitalizedString.concat('', character.toUpperCase())
        } else {
            capitalizedString = capitalizedString.concat('', character.toLowerCase())
        };
        character === ' ' ? upperCheck = true : upperCheck = false;
    }
    return capitalizedString;
}
console.log(capitalize("hOLA que TAL EsTas?"));