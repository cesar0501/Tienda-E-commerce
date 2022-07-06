import { getProducts } from "./firebase.js";

const renderCards = async (productsArr) => {

    const products = await productsArr;

    const cards = document.querySelector(".cards");

    products.forEach(product => {

        const card = document.createElement ("div");
    
        card.className = "card col-6";
    
        card.innerHTML = `
    
         <img src=${product.data().img} class="card-img-top" alt=${product.data().name}>
    
         <div class="card-body">
          <h5 class="card-title">${product.data().name}</h5>
          <p class="card-text text success">${product.data().price}</p>
          <a href="#" class="btn btn-primary comprarBtn" id=${product.id}>Comprar</a>
        </div>
        `;

        cards.append(card);
    });

    addEvent();
}

renderCards(getProducts());

const addEvent = () => {

    const comprarBtn = document.querySelectorAll(".comprarBtn");
  
     console.log(comprarBtn);
  
  }