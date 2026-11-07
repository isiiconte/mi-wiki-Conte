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