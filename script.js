// -------------------------
// CAMBIAR DE PANTALLA
// -------------------------

function mostrar(id) {

    document.querySelectorAll(".pantalla").forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");

}


// -------------------------
// ENCUESTA
// -------------------------

const preguntas = [

    "¿Te gusta pasar tiempo conmigo? 💕",

    "¿Te acuerdas de nuestros momentos bonitos? 🥹",

    "¿Me consideras una persona importante para ti? 💗",

    "¿Te gustaría seguir creando recuerdos juntos? ✨"

];

let preguntaActual = 0;

const preguntaElemento = document.getElementById("pregunta");

preguntaElemento.textContent = preguntas[preguntaActual];


function responder(respuesta) {

    const resultado = document.getElementById("resultado");

    if (respuesta === "si") {

        resultado.textContent = "Awww 🥹💗 sabía que dirías que sí.";

    } else {

        resultado.textContent = "¿¿NO?? 😭 jajaja, inténtalo otra vez.";

        return;
    }

    preguntaActual++;

    if (preguntaActual < preguntas.length) {

        setTimeout(() => {

            preguntaElemento.textContent =
                preguntas[preguntaActual];

            resultado.textContent = "";

        }, 1000);

    } else {

        setTimeout(() => {

            mostrar("sorpresa");

        }, 1200);

    }

}


// -------------------------
// PRIMERA SORPRESA
// -------------------------

const mensajeSorpresa = document.getElementById("mensajeSorpresa");

mensajeSorpresa.textContent =
    "La primera sorpresa es saber que llegaste hasta aquí. 💗";


/* 
   AQUÍ PUEDES CAMBIAR EL MENSAJE
*/


// -------------------------
// JUEGO DE PREGUNTAS
// -------------------------

const preguntasJuego = [

    {
        pregunta: "¿Cuál crees que es mi color favorito? 🎨",

        opciones: [
            "Rosa 💗",
            "Azul 💙",
            "Morado 💜",
            "Verde 💚"
        ],

        correcta: 0
    },

    {
        pregunta: "¿Qué prefiero para pasar un rato bonito? ✨",

        opciones: [
            "Ver una película 🎬",
            "Salir a caminar 🌸",
            "Comer algo rico 🍕",
            "Cualquiera de las anteriores 😌"
        ],

        correcta: 3
    },

    {
        pregunta: "¿Qué prefiero recibir? 🎁",

        opciones: [
            "Un regalo caro",
            "Un detalle hecho con cariño 💕",
            "Nada",
            "Un videojuego"
        ],

        correcta: 1
    }

];

let preguntaJuegoActual = 0;

function cargarPreguntaJuego() {

    const pregunta = preguntasJuego[preguntaJuegoActual];

    document.getElementById("preguntaJuego").textContent =
        pregunta.pregunta;

    const opciones =
        document.getElementById("opciones");

    opciones.innerHTML = "";

    pregunta.opciones.forEach((opcion, indice) => {

        const boton = document.createElement("button");

        boton.textContent = opcion;

        boton.onclick = () => {

            revisarRespuesta(indice);

        };

        opciones.appendChild(boton);

    });

}

function revisarRespuesta(indice) {

    const pregunta = preguntasJuego[preguntaJuegoActual];

    const resultado =
        document.getElementById("resultadoJuego");

    if (indice === pregunta.correcta) {

        resultado.textContent =
            "¡Correcto! 😍💗";

    } else {

        resultado.textContent =
            "Casi 😝 pero no era esa.";

    }

    preguntaJuegoActual++;

    if (preguntaJuegoActual >= preguntasJuego.length) {

        setTimeout(() => {

            mostrar("cajas");

        }, 1200);

    } else {

        setTimeout(() => {

            resultado.textContent = "";

            cargarPreguntaJuego();

        }, 1000);

    }

}


// Cargar el juego
cargarPreguntaJuego();


// -------------------------
// CAJAS SORPRESA
// -------------------------

function abrirSorpresa(numero) {

    const texto =
        document.getElementById("sorpresaFinal");

    if (numero === 1) {

        texto.textContent =
            "💌 Sorpresa: tienes un mensaje especial guardado para ti.";

    }

    if (numero === 2) {

        texto.textContent =
            "🌟 Sorpresa: uno de mis recuerdos favoritos es compartir momentos contigo.";

    }

    if (numero === 3) {

        texto.textContent =
            "💗 Sorpresa: todavía quedan muchos recuerdos por crear.";

    }

    setTimeout(() => {

        mostrar("final");

    }, 3000);

}


// -------------------------
// REINICIAR
// -------------------------

function reiniciar() {

    preguntaActual = 0;

    preguntaJuegoActual = 0;

    document.getElementById("pregunta").textContent =
        preguntas[0];

    document.getElementById("resultado").textContent = "";

    cargarPreguntaJuego();

    mostrar("inicio");

}