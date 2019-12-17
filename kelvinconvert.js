//javascript practice. Part of Codecademy/Web Dev track

//convert temperature from kelvin
//to celcius and then to farenheit
//define kelvin, which will stay constant
const kelvin = 0

//converting Kelvin to Celsius
const celsius = kelvin - 273;

//Calculate Fahrenheit from celsius. Use let
//to allow changing value
let fahrenheit = celsius*(9/5)+32

//Round down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit)

console.log(`${kelvin} Kelvin in Fahrenheit  is ${fahrenheit} degrees Fahrenheit`)

//Convert Celsius to the Newton scale
let newton = celsius*(33/100)

//Round down the Newton scale
newton = Math.floor(newton)

//Log the temperature in newton to the //console
console.log("-----------------------")
console.log(`${kelvin} Kelvin in Newton scale is ${newton} Newton`)