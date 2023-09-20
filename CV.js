function idiomas() {
    document.getElementById('boton_idiomas').innerHTML= "Inglés nivel intermedio";
}

document.getElementById("boton_idiomas").onclick = idiomas();

function informatica() {
    document.getElementById('boton_informatica').innerHTML= "Manejo de PC & herramientas Office";
}

document.getElementById("boton_informatica").onclick = informatica();

function primaria() { var parrafo = document.getElementById("parrafo"); 
if (parrafo.style.display = "none") { parrafo.style.display = "block"; } 
else { parrafo.style.display = "none"; } }

function secundaria() { var parrafo_1 = document.getElementById("parrafo_1"); 
if (parrafo_1.style.display = "none") { parrafo_1.style.display = "block"; } 
else { parrafo_1.style.display = "none"; } }

function maestria() { var parrafo_2 = document.getElementById("parrafo_2"); 
if (parrafo_2.style.display = "none") { parrafo_2.style.display = "block"; } 
else { parrafo_2.style.display = "none"; } }


