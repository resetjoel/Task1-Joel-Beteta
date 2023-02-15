import {
  crearCheckbox,
  crearCartas,
  imprimirCartas,
  filtrar
} from "./module/functions.js";
const api = (`https://mindhub-xj03.onrender.com/api/amazing`)
const contenedor = document.getElementById("contenedor");
const homeCarts = document.getElementById("tarjetId");

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const eventData = data.events;
    formHome.addEventListener("keyup",function(){filtrar(eventData)});
    contenedor.addEventListener("change", function(){filtrar(eventData)});
    crearCheckbox(eventData, contenedor);
    imprimirCartas(eventData, homeCarts);
    crearCartas(data);

  });