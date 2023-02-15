const api = (`https://mindhub-xj03.onrender.com/api/amazing`)
fetch(api)
.then(response => response.json())
.then(data => {
const eventosD = data.events
const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
const cardD = eventosD.find(event => event._id == id)
const verTarjeta = document.getElementById("cardDescription")
verTarjeta.innerHTML = 
`<div class="card" style="width: 18rem">
<div class="card-descrip">
  <h5 >Amazing Event Presents</h5>
  <h6 class=" mb-2 text-muted">${cardD.name}</h6>
  <p class="card-text">${cardD.description}</p>
  <p class="card-text">price: $${cardD.price}</p>
</div>
</div>
<div class="card" style="width: 25rem;" >
<img src="${cardD.image}" class="card-img-top" alt="special-events" style="width: 100%; height: 110%;">
</div>`
})
