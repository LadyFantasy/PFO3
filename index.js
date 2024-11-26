//FUNCIÓN PARA MOSTRAR CUALQUIER EJERCICIO POR CONSOLA
function mostrarPorConsola(ejercicio, datos, funcion) {
  console.log(`Ejemplos del: ${ejercicio}`);
  datos.forEach(dato => {
    console.log(`Entrada: "${dato}"`);
    console.log(`Resultado: "${funcion(dato)}"`);
  });
}

/* Como pensé los ejercicios para que se ingresaran los datos y se mostrara la solución en el DOM, necesitaba encontrar la forma de que también se mostraran por consola ejemplos de ejecución de cada ejercicio. Primero hice una función para cada ejercicio, pero luego armé una función que me sirviera para todos, solo hay que pasarle los datos correspondientes a cada ejercicio. */

////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicio 1
console.log("EJERCICIO 1");

const btnRect = document.querySelector("#resultBtn");
const salida1 = document.querySelector("#salida1");

function calculoAreaRect(longitud, ancho) {
  return longitud * ancho;
}

btnRect.addEventListener("click", () => {
  const longInput = parseFloat(document.querySelector("#long").value);
  const anchoInput = parseFloat(document.querySelector("#ancho").value);

  if (!isNaN(longInput) && !isNaN(anchoInput)) {
    const resultado = calculoAreaRect(longInput, anchoInput);
    salida1.textContent = `El área del rectángulo es: ${resultado}`;
  } else {
    salida1.textContent = "Ingrese un valor numérico válido.";
  }
});

mostrarPorConsola(
  "EJERCICIO 1",
  [
    [3.2, 5],
    [15, 40],
    [2, 8]
  ],
  datos => calculoAreaRect(datos[0], datos[1])
);
console.log("**********************************************************************");

////////////////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 2
console.log("EJERCICIO 2");

const cadena1 = document.querySelector("#cadena1");
const resultCadena1 = document.querySelector("#resultCadena1");
const salida2 = document.querySelector("#salida2");

function contarPalabras(cadena) {
  let cadenaLimpia = cadena.trim();

  salida2.style.display = "block";

  if (cadenaLimpia && cadenaLimpia.length > 0) {
    const palabras = cadenaLimpia.split(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+/).filter(Boolean);
    const cantidadPalabras = palabras.length;

    salida2.textContent = `La frase tiene ${cantidadPalabras} palabras`;
  } else {
    salida2.textContent = "Ingrese una frase";
    return 0;
  }
}

// Evento al hacer clic en el botón
resultCadena1.addEventListener("click", () => {
  contarPalabras(cadena1.value);
  cadena1.value = "";
});

// Evento cuando se presiona Enter
cadena1.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    contarPalabras(cadena1.value);
    cadena1.value = "";
  }
});

mostrarPorConsola(
  "EJERCICIO 2",
  [
    "No existe una escuela que enseñe a vivir",
    "Nos siguen pegando abajo",
    "No voy a esperar que el destino hable por mí",
    ""
  ],
  contarPalabras
);

console.log("**********************************************************************");

////////////////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 3
console.log("EJERCICIO 3");

const cadena2 = document.querySelector("#cadena2");
const resultCadena2 = document.querySelector("#resultCadena2");
const salida3 = document.querySelector("#salida3");

function invertirCadena(texto) {
  return texto.split("").reverse().join("");
}

const ejecutarInvertirCadena = () => {
  const texto = cadena2.value.trim();
  if (texto) {
    const textoInvertido = invertirCadena(texto);
    salida3.textContent = `La cadena invertida es: "${textoInvertido}"`;
  } else {
    salida3.textContent = "Ingrese una cadena de texto.";
  }
  cadena2.value = "";
};

resultCadena2.addEventListener("click", ejecutarInvertirCadena);
cadena2.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    ejecutarInvertirCadena();
  }
});

mostrarPorConsola(
  "EJERCICIO 3",
  ["Hola", "Front es mi materia preferida", "Hola, mundo"],
  invertirCadena
);

console.log("**********************************************************************");

////////////////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 4
console.log("EJERCICIO 4");

const cadena4 = document.querySelector("#cadena4");
const resultCadena4 = document.querySelector("#resultCadena4");
const salida4 = document.querySelector("#salida4");

function esPalindromo(texto) {
  const limpio = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
    .replace(/[^a-záéíóúñ]/g, ""); // Elimina caracteres no alfabéticos
  return limpio === limpio.split("").reverse().join("");
}

const ejecutarEsPalindromo = () => {
  const texto = cadena4.value.trim();
  if (texto) {
    const esPal = esPalindromo(texto);
    salida4.textContent = esPal
      ? `"${texto}" es un palíndromo.`
      : `"${texto}" no es un palíndromo.`;
  } else {
    salida4.textContent = "Ingrese una palabra.";
  }
  cadena4.value = "";
};

resultCadena4.addEventListener("click", ejecutarEsPalindromo);
cadena4.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    ejecutarEsPalindromo();
  }
});

mostrarPorConsola("EJERCICIO 4", ["Neuquén", "filosofía", "anilina"], esPalindromo);

console.log("**********************************************************************");

////////////////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 5
console.log("EJERCICIO 5");

const btnEdadCanina = document.querySelector("#resultEdadCanina");
const edadPerroInput = document.querySelector("#edadPerro");
const salida5 = document.querySelector("#salida5");

function edadCanina(edadHumana) {
  if (!isNaN(edadHumana) && edadHumana > 0) {
    const edadPerro = edadHumana * 7;
    return `Tu perro tiene ${edadPerro} años humanos`;
  } else {
    return "Por favor ingresa una edad válida";
  }
}

function manejarEdadCanina() {
  const edadHumana = parseInt(edadPerroInput.value);
  const resultado = edadCanina(edadHumana);

  salida5.textContent = resultado;
  edadPerroInput.value = "";
}

btnEdadCanina.addEventListener("click", manejarEdadCanina);

edadPerroInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    manejarEdadCanina();
  }
});

//Manejo por consola (prompt)
const edadHumanaPrompt = parseInt(prompt("Ingrese la edad de su perro en años humanos:"));
if (!isNaN(edadHumanaPrompt) && edadHumanaPrompt > 0) {
  console.log("Resultado del valor ingresado por Prompt: ");
  console.log(edadCanina(edadHumanaPrompt));
} else {
  console.log("Ingrese una edad válida");
}

mostrarPorConsola("EJERCICIO 5", [3, 5, 7], edadCanina);

console.log("**********************************************************************");
