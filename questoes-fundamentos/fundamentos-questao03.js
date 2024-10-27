const celsiusParaFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitParaCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

const temperaturaCelsius = 30;

const temperaturaFahrenheit = 86;

const convertidoParaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);

const convertidoParaCelsius = fahrenheitParaCelsius(temperaturaFahrenheit);

console.log(`${temperaturaCelsius}°C em Fahrenheit é: ${convertidoParaFahrenheit.toFixed(2)}°F`);
console.log(`${temperaturaFahrenheit}°F em Celsius é: ${convertidoParaCelsius.toFixed(2)}°C`);
