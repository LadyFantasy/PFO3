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

/* FUNCIÓN QUE OCULTA LOS PÁRRAFOS DE RESULTADOS ANTES DE EJECUTARSE LAS FUNCIONES */
function ocultar() {
  const results = document.querySelectorAll(".result");

  results.forEach(element => {
    if (
      element.textContent.trim() === "" ||
      element.textContent.trim() === "No ingresó ninguna frase"
    ) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", ocultar);

/* Quise que los cuadros de resultado tuvieran borde, pero este se veía aunque no tuvieran contenido. Por eso armé una función que los elimina del DOM si están vacíos. Esta se llama al cargar la página y al finalizar cada EventListener*/


////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicio 1
console.log("EJERCICIO 1");


const btnRect = document.querySelector("#resultBtn");
const salida1 = document.querySelector("#salida1");
const longInput = document.querySelector("#long");
const anchoInput = document.querySelector("#ancho");

function calculoAreaRect(longitud, ancho) {
  return longitud * ancho;
}

btnRect.addEventListener("click", () => {
  const longitud = parseFloat(longInput.value);
  const ancho = parseFloat(anchoInput.value);

  if (!isNaN(longitud) && !isNaN(ancho)) {
    const resultado = calculoAreaRect(longitud, ancho);
    salida1.textContent = `El área del rectángulo es: ${resultado}`;
  } else {
    salida1.textContent = "Ingrese un valor numérico válido";
  }
    
  
  longInput.value = "";
  anchoInput.value = "";
  
  ocultar();
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

/* Lo que hace la función es simple. Lo único en lo que se me dificultó fue en validar que los valores fueran números */

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
    return cantidadPalabras; 
  } else {
    salida2.textContent = "No ingresó ninguna frase";
    return 0; 
  }
}

resultCadena1.addEventListener("click", () => {
  contarPalabras(cadena1.value);
  cadena1.value = "";
  salida2.textContent.trim() = "";
  ocultar();
});

cadena1.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    contarPalabras(cadena1.value);
    cadena1.value = "";
    salida2.textContent.trim() = "";
    ocultar();
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

/* La dificultad de este ejercicio es en limpiar la frase antes de contar las palabras y buscar regex que validen por dónde se va separando. Después tuve que probar varias cosas distintas para que el cuadro de resultado no se mostrara al cargar la página, porque la hacía a pesar de la función que definí antes. */

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
    salida3.textContent = "Ingrese una cadena de texto";
  }
  cadena2.value = "";
};

resultCadena2.addEventListener("click", event => {
  ejecutarInvertirCadena();
  ocultar();
});
cadena2.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    ejecutarInvertirCadena();
    ocultar();
  }
});

mostrarPorConsola(
  "EJERCICIO 3",
  ["Hola", "Front es mi materia preferida", "Hola, mundo"],
  invertirCadena
);

console.log("**********************************************************************");

/* Sabía que la mejor forma de invertir una cadena era hacer algo como texto.split("").reverse().join(""). La parte más difícil, como en todos los ejercicios es el manejo del DOM. */

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
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^a-záéíóúñ]/g, ""); 
  return limpio === limpio.split("").reverse().join("");
}

const ejecutarEsPalindromo = () => {
  const texto = cadena4.value.trim();
  if (texto) {
    const esPal = esPalindromo(texto);
    salida4.textContent = esPal ? `"${texto}" es un palíndromo` : `"${texto}" no es un palíndromo`;
  } else {
    salida4.textContent = "Ingrese una palabra";
  }
  cadena4.value = "";
};

resultCadena4.addEventListener("click", () => {
  ejecutarEsPalindromo();
  ocultar();
});
cadena4.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    ejecutarEsPalindromo();
    ocultar();
  }
});

mostrarPorConsola("EJERCICIO 4", ["Neuquén", "filosofía", "anilina"], esPalindromo);

console.log("**********************************************************************");

/* Ya había hecho funciones para detectar palíndromos y sabía que una de las formas era invertir la frase y compararla con la original. Eso fue lo que hice, pero antes debía normalizarla para sacarle mayúsculas y tildes para que la comparación diera verdadera, así que busqué cómo eran las expresiones regulares para lograrlo. */

////////////////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 5
console.log("EJERCICIO 5");

const btnEdadCanina = document.querySelector("#resultEdadCanina");
const edadPerroInput = document.querySelector("#edadPerro");
const salida5 = document.querySelector("#salida5");
const resultPromt = document.querySelector("#resultPrompt");

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

btnEdadCanina.addEventListener("click", event => {
    manejarEdadCanina();
    ocultar();
});

edadPerroInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    manejarEdadCanina();
    ocultar();
  }
});

mostrarPorConsola("EJERCICIO 5", [3, 5, 7], edadCanina);

//Manejo por consola (prompt)
resultPromt.addEventListener("click", () => {
  const edadHumanaPrompt = parseInt(prompt("Ingrese la edad de su perro en años humanos:"));
  if (!isNaN(edadHumanaPrompt) && edadHumanaPrompt > 0) {
    console.log("Resultado del valor ingresado por Prompt: ");
    console.log(edadCanina(edadHumanaPrompt));
    salida5.textContent = edadCanina(edadHumanaPrompt);
    ocultar();
  } else {
    console.log("Ingrese una edad válida");
  }
});

console.log("**********************************************************************");


/* En este ejercicio, lo que más complicado me pareció fue separar lo que entraba por input, loque entraba por prompt y lo que se mostraba en consola. Tuve que probar varias cosas y reorganizar las funciones y los events listeners para que no se pisaran las distintas funcionalidades */
