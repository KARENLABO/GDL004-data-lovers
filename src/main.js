 import POTTER from './data/potter/potter.js';
 
 // trae las funciones del otro js
 import {todosLosPersonajes, hombres, mujeres, ordenarPorNombre} from './data.js';
 

let bottonconoceMas= document.getElementById ("conocemas");
let selCasas= document.getElementById ("seleccion-casas");
let selPersonajes= document.getElementById ("seleccion-personajes");
let regresarPagina2a1= document.getElementById ("regresarAPag1");
let regresarPagina4a2= document.getElementById ("regresarAPagina2");
let regresarPagina3a2= document.getElementById ("regresarAPag2");




bottonconoceMas.addEventListener("click", () => {
  document.getElementById("pagina1").style.display = "none";
  document.getElementById("pagina2").style.display = "block";
});

regresarPagina2a1.addEventListener("click",() =>{
  location.reload();
});



regresarPagina4a2.addEventListener("click", () => {
  document.getElementById("pagina4").style.display = "none";
  document.getElementById("pagina2").style.display = "block";
});

regresarPagina3a2.addEventListener("click", () => {
  document.getElementById("pagina3").style.display = "none";
  document.getElementById("pagina2").style.display = "block";
});


selCasas.addEventListener("click", () => {
  document.getElementById("pagina2").style.display = "none";
  document.getElementById("pagina3").style.display = "block";
});

selPersonajes.addEventListener("click", () => {
  document.getElementById("pagina2").style.display = "none";
  document.getElementById("pagina4").style.display = "block";
  mostrarPersonajes(infoGeneral);
  
});

//array's
let infoGeneral = todosLosPersonajes(POTTER);
let filHombres = hombres(POTTER);
let filMujeres = mujeres(POTTER);
let ordenar = ordenarPorNombre(POTTER)


//obtiene el objeto del HTML
let botonHombres = document.getElementById("hombres");
let botonMujeres = document.getElementById("mujeres"); 
let botonOrdenar = document.getElementById("OrdenarA-Z"); 
let mostrar = document.getElementById("mostrarPersonajes");

// se agregan los eventos y las funcciones a los botones
botonHombres.addEventListener("click", filtradoHombres)
botonMujeres.addEventListener("click", filtradoMujeres)
botonOrdenar.addEventListener("click", ordenado)



function filtradoHombres(){
  mostrarPersonajes(filHombres);
};

function filtradoMujeres(){
  mostrarPersonajes(filMujeres);
  };

function ordenado(){
  mostrarPersonajes(ordenar);
};


// crea el div general de los personajes principales
let lista= document.createElement("div");
lista.classList.add("personajes");

function mostrarPersonajes(personaje){
  lista.innerHTML="";
  for(let i=0; i<personaje.length; i++){
  //se crean todos los elementos del html
    let card = document.createElement('div');
    let br = document.createElement('br');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let img=document.createElement("img");
    let divImg = document.createElement('div');
  // esta linea crea el nombre del div padre
    card.classList.add("card");
    // esta linea le agrega la clase al div de las imagenes
    divImg.classList.add("img-personajes"); 
  // esta linea le agrega el elemento de div de la imagen 
    card.appendChild(divImg);
    // esta linea le agrega el elemento de la imagen al div de la imagen.
    divImg.appendChild(img)
  // esta linea le agrega el atributo del src a la imagen
    img.setAttribute("src",personaje[i].image);
  // esta linea le agrega la classe a las imagenes.
    img.classList.add("imagenesP")
    // agregando una clase al p1
    p1.classList.add("nombre-actor-personaje");
  // esta linea Crea el personaje y lo muestra en el html
    const crearPersonaje =
    ` 
      <h2> ${personaje[i].name} </h2>
      </div> 
     `;
    p1.innerHTML= crearPersonaje;
  // esta linea le agrega al div principal el nombre del personaje
    card.appendChild(p1);
  // esta linea le agrega un salto de linea entre personaje y actor
    card.appendChild(br);
    // agregando una clase al p2
    p2.classList.add("nombre-actor-personaje");
  // esta linea le agrega al p2  el nombre del actor
    const crearActor=
    `<div class="actores"> <strong>Actor:  </strong>${personaje[i].actor}</div>`;
    p2.innerHTML=crearActor;
  // esta linea le agrega al div principal el nombre del actor
    card.appendChild(p2);
  //esta linea le agrega todas las cards al div principal
    lista.appendChild(card);
  }
  mostrar.appendChild(lista);
};



