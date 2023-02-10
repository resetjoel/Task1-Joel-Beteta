let upcomingCards = document.querySelector(".tarjet");

const reloadUp = ()=>{
data.events.forEach((item) => {
  if (item.date > data.currentDate) {
    upcomingCards.innerHTML += `
    <div class="card text-center m-3" style="width: 18rem;">
        <img src=${item.image} class="card-img-top" alt="festi-colecti">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Date: ${item.date}</p>
            <div class="price-descption">
                <p class="card-text ">Price: ${item.price}</p>
                <a href="./description.html?id=${item._id}" class="btn btn-outline-danger">Description</a>
            </div>
        </div>
    </div>`;
  }
})
}
reloadUp()

let formUp = document.querySelector("#formUp")
let btnUp = document.querySelector("#btnUp")
let result = document.querySelector(".tarjet")

let filtre = ()=> {
    result.innerHTML = "";
    let text = formUp.value.toLowerCase();
    for(let dataF of data.events){ 
      if (dataF.date > data.currentDate){
        let name = dataF.name.toLowerCase();
        if(name.indexOf(text) !== -1){
            result.innerHTML += `    <div class="card text-center m-3" style="width: 18rem;">
            <img src=${dataF.image} class="card-img-top" alt="festi-colecti">
            <div class="card-body">
                <h5 class="card-title">${dataF.name}</h5>
                <p class="card-text">Date: ${dataF.date}</p>
                <div class="price-descption">
                    <p class="card-text ">Price: ${dataF.price}</p>
                    <a href="./description.html?id=${dataF._id}" class="btn btn-outline-danger">Description</a>
                </div>
            </div>
        </div>`
        }}
    }
    if(result === ""){
        `<li>Card no encontrada</li>`
    }
}
btnUp.addEventListener("click", filtre)
formUp.addEventListener("keyup", filtre)

const checkboxs = document.querySelectorAll(".form-check-input")
        const filterData = () => {
            let filteredData = [];
            for(let input of checkboxs){
                if(input.checked){
                    filteredData = filteredData.concat(data.events.filter(events=>events.category === input.value))
                }
            }
            result.innerHTML = "";
            if(filteredData.length === 0){
                reloadUp()
            }
            else {
                filteredData.forEach(element => {
                    result.innerHTML += 
                    `<div class="card text-center m-3" style="width: 18rem;">
                    <img src=${element.image} class="card-img-top" alt="festi-colecti">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">Date: ${element.date}</p>
                        <div class="price-descption">
                            <p class="card-text ">Price: ${element.price}</p>
                            <a href="./description.html?id=${element._id}" class="btn btn-outline-danger">Description</a>
                        </div>
                    </div>
                </div>`
                });
            }
            
        }

checkboxs.forEach(checkbox=>checkbox.addEventListener("change", filterData))