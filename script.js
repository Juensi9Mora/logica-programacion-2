function redondear(valor) {
    return Math.round(valor * 100) / 100;
}

document.getElementById('btnConversor').addEventListener('click', () => {
    let entrada;
    let celsius;

    // El dato debe ser un número válido sino se repite con while hasta que sea un numero
    while (true) {
        entrada = prompt("Ingresa la temperatura en grados Celsius:");

        // Si el usuario presiona "Cancelar", no continua
        if (entrada === null) return;

        entrada = entrada.trim();

        // Number() rechaza textos como "12abc" mientras que (parseFloat los aceptaba)
        celsius = Number(entrada);

        if (entrada !== "" && Number.isFinite(celsius)) {
            break;
        }

        alert("Error: el dato ingresado no es un número válido. Inténtalo de nuevo.");
    }

    // Fórmulas de conversión
    const kelvin = redondear(celsius + 273.15);
    const fahrenheit = redondear(celsius * 9 / 5 + 32);

    // Resultados por consola
    console.log(`Entrada: ${celsius}`);
    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);
    
    // Resultado en DOM
   document.getElementById('txtCelsius').textContent = `${celsius} °C`;
   document.getElementById('txtKelvin').textContent = `${kelvin} K`;
   document.getElementById('txtFahrenheit').textContent = `${fahrenheit} °F`;  

    document.getElementById('resultado').hidden = false;
});