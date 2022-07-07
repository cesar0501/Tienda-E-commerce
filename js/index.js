import { getProducts, getProduct } from "./firebase.js";



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

    const comprarBtns = document.querySelectorAll(".comprarBtn");
  
    comprarBtns.forEach(btn => btn.addEventListener("click" , addTocart));
  
  }

  const checkCart = (id) => cart.some(product => product.id === id);

  const addTocart = async (e) => {

    if (checkCart(e.target.id)) {

        return false;
    }

    else {

        const productToCart = await getProduct(e.target.id);

        cart.push(productToCart);

     renderCart();

    }
    

    }


  const cart = []


  const renderCart = () => {

    const inneCart  = document.querySelector(".innerCart");

    inneCart.innerHTML= "";

    cart.forEach(product => {

        const card = document.createElement("div");

        card.className = "card-mb-3";

        card.innerHTML = `

        <div class="row g-0">

     <div class="col-md-4">
      <img src=${product.data().img} class="img-fluid rounded-start" alt=${product.data().name}>
     </div>

     <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${product.data().name}</h5>
        <p class="card-text">${product.data().price}</p>
        
      </div>
     </div>

     </div>
        
     `;

     inneCart.append(card);

    });
  }

  

  