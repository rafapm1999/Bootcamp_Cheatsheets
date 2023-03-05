function sayHello(){
    return "Hello World!!!";
}

const generateRandInt = (max, min) => 
    Math.floor(Math.random() * (max - min +1)) + min;

const mockData = (bottomLimit, min, max, topLimit, iterations) => {
    let data = []
    for (let i = 0; i < iterations; i++) {
        data.push(Array.of(bottomLimit, min, max,topLimit))
        
    }
    console.log(data);
}
mockData(1, 2, 3, 4, 100)




module.exports = {sayHello, generateRandInt};

