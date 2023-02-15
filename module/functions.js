export function crearCheckbox(eventData, cont) {
  const categorias = [...new Set(eventData.map((events) => events.category))];
  categorias.forEach((categoria) => {
    cont.innerHTML += 
      `<label class="form"><input id="inputs" type="checkbox" value="${categoria}"/>${categoria}</label>`
      ;
  });
}

export function crearCartas(evento) {
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML += `<div style="width: 18rem;">
  <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
  <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">Date: "${evento.date}"</p>
      <div class="price-descption">
          <p class="card-text ">Price: $${evento.price}</p>
          <a href="../assets/description.html?id=${evento._id}" class="btn btn-outline-danger">Description</a>
      </div>
  </div>
</div>`;
console.log(div)
  return div;
  
}

export function imprimirCartas(eventos, container) {
  container.innerHTML = "";
  let fragment = document.createDocumentFragment();
  eventos.forEach((evento) => {
    const divCartas = crearCartas(evento);
    fragment.appendChild(divCartas);
  });
  container.appendChild(fragment);
}

export function filtrar(eventData) {
  let checked = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((ele) => ele.value);
  let filtrarPorCategory = eventData.filter(
    (eve) => checked.includes(eve.category) || checked.length === 0
  );
  let filtrarPorSerchs = filtrarPorCategory.filter((eve) =>
    eve.name.toLowerCase().includes(formHome.value.toLowerCase())
  );
  imprimirCartas(filtrarPorSerchs, tarjetId);
}

