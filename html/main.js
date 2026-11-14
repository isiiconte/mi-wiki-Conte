// ÍNDICE AUTOMÁTICO: genera un enlace por cada h2 de la página

const indice = document.querySelector("#indice");
const secciones = document.querySelectorAll("main section");

if (indice) {
    secciones.forEach(function(seccion) {
        const titulos = seccion.querySelectorAll("h2, h3");
        let listaSubtitulos;

        titulos.forEach(function(titulo) {
            if (!titulo.id) return;

            const elementoLista = document.createElement("li");
            const enlace = document.createElement("a");
            enlace.href = "#" + titulo.id;
            enlace.textContent = titulo.textContent;
            elementoLista.appendChild(enlace);
            if (titulo.tagName === "H2") {
                indice.appendChild(elementoLista);
                listaSubtitulos = document.createElement("ul");
                elementoLista.appendChild(listaSubtitulos);
            } else if (listaSubtitulos) {
                listaSubtitulos.appendChild(elementoLista);
            }
        });
    });
}

// MODO OSCURO: alterna la clase modo-oscuro en el body

const botonModo = document.querySelector("#modoOscuro");
botonModo.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
    if (document.body.classList.contains("modo-oscuro")) {
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
});

// TAMAÑO DE TEXTO: pone la clase texto-* en el main

const botonesTamano = document.querySelectorAll(".tamanoTexto");
const articulo = document.querySelector("main");
botonesTamano.forEach(function(boton) {
    if (boton.dataset.tamano === "estandar") {
        boton.classList.add("seleccionado");
    }

    boton.addEventListener("click", function() {
        articulo.classList.remove("texto-pequeno", "texto-estandar", "texto-grande");

        botonesTamano.forEach(function(b) {
            b.classList.remove("seleccionado");
        });

        articulo.classList.add("texto-" + boton.dataset.tamano);
        boton.classList.add("seleccionado");
    });
});

// SECCIONES PLEGABLES: alterna la clase colapsada al tocar un h2
const titulosSecciones = document.querySelectorAll("main section > h2");

titulosSecciones.forEach(function(titulo) {
    titulo.addEventListener("click", function() {
        const seccion = titulo.parentElement;

        seccion.classList.toggle("colapsada");
    });
});

// DISCUSIÓN: contador, validación y alta/baja de comentarios

const formulario = document.querySelector("#formularioDiscusion");
const nombre = document.querySelector("#nombreComentario");
const comentario = document.querySelector("#textoComentario");
const contador = document.querySelector("#contadorCaracteres");
const lista = document.querySelector("#listaComentarios");
const mensaje = document.querySelector("#mensajeDiscusion");
comentario.addEventListener("input", function() {
    contador.textContent = comentario.value.length + " / 200";
});
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    nombre.classList.remove("error");
    comentario.classList.remove("error");
if (nombre.value.trim() === "") {
    nombre.classList.add("error");
    mensaje.textContent = "Ingresá tu nombre.";
    return;
}

if (comentario.value.trim().length < 10 || comentario.value.length > 200) {
    comentario.classList.add("error");
    mensaje.textContent = "El comentario debe tener entre 10 y 200 caracteres.";
    return;
}
    const nuevoLi = document.createElement("li");
    const strongNombre = document.createElement("strong");
    strongNombre.textContent = nombre.value + ":";
    const pComentario = document.createElement("p");
    pComentario.textContent = comentario.value;
    const borrar = document.createElement("button");
    borrar.textContent = "Borrar";

    borrar.addEventListener("click", function() {
        nuevoLi.remove();
    });
    nuevoLi.appendChild(strongNombre);
    nuevoLi.appendChild(pComentario);
    nuevoLi.appendChild(borrar);
    lista.appendChild(nuevoLi);

    formulario.reset();
    contador.textContent = "0 / 200";
    mensaje.classList.remove("error");
    mensaje.textContent = "¡Comentario publicado!";
});

