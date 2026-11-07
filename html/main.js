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
const botonModo = document.querySelector("#modoOscuro");
botonModo.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
    if (document.body.classList.contains("modo-oscuro")) {
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
});

const botonesTamano = document.querySelectorAll(".tamanoTexto");
const articulo = document.querySelector("main");
document.querySelector('[data-tamano="estandar"]').classList.add("seleccionado");

botonesTamano.forEach(function(boton) {
    boton.addEventListener("click", function() {

        articulo.classList.remove("texto-pequeno", "texto-estandar", "texto-grande");

        botonesTamano.forEach(function(boton) {
            boton.classList.remove("seleccionado");
        });

        articulo.classList.add("texto-" + boton.dataset.tamano);
        boton.classList.add("seleccionado");
    });
});