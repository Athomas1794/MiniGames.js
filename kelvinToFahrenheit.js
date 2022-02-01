//This is today forecast in kelvin
const kelvin = 293;

//The days forecast in celcius
let celcius = kelvin - 273;

//Converting celcius to fahrenheit
let fahrenheit = celcius * (9/5) + 32;
//rounding down the temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit}`);
