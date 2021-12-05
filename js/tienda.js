//Array productos 

const productosTienda = [

   {id: "puntaCuarzo", foto: "'../assets/img/puntacuarzo.JPG'" , nombre: "Punta de Cuarzo Cristal", piedra: "Cuarzo Cristal", material: "Cristal", detalle: "Puntas de cuarzo en bruto", precio: 1100},
   {id: "dijeAgata", foto: "'../assets/img/agata.jpeg'", nombre: "Dije corazón Azul", piedra: "Ágata azul", material: "baño de plata", detalle: "Dije de Ágata Azul pulida, <br> en forma de corazón", precio: 620},
   {id: "anilloPleya", foto: "'../assets/img/anillopleyades.JPG'", nombre: "Anillo Pleyades", piedra: "no", material:"Acero dorado", detalle: "Anillo labrado de acero dorado", precio: 500},
   {id: "arosB", foto: "'../assets/img/arosboti.jpg'", nombre: "Aros Botticelli", piedra: "no", material: "Acero dorado", detalle: "Aros tipo chapon colgante en <br>forma de Ostra. Acero dorado", precio: 790},
   {id: "cuarzoR", foto: "'../assets/img/cuarzorolado.jpeg'", nombre: "Cuarzo Rosa Rolado", piedra: "Cuarzo Rosa", material: "no", detalle: "Cristales de cuarzo rosa rolado. <br> Precio por unidad", precio: 180},
   {id: "anilloVer", foto: "'../assets/img/anilloverde.jpeg'", nombre: "Anillo Cuarzo Verde", piedra: "Cuarzo Verde", material: "Alpaca", detalle: "Anillo artesanal regulable, <br> con piedra de dos puntas", precio: 900}, 
   {id: "anilloAma", foto: "'../assets/img/anillo.JPG'", nombre: "Anillo Amatista", piedra: "Amatista", material: "Alpaca", detalle: "Anillo artesanal regulable, <br> con piedra de dos puntas", precio: 900},
   {id: "dijeRosa", foto: "'../assets/img/dijecuarzo.JPG'",nombre: "Dije Cuarzo Rosa", piedra: "Cuarzo Rosa", material: "Alpaca", detalle: "Dije artesnal grande, <br> con forma de obelisco invertido", precio: 2800},
   {id: "dijeCitri", foto: "'../assets/img/citrino.JPG'", nombre: "Dije Citrino", piedra: "Cuarzo Citrino", material: "Alpaca", detalle: "Dije artesanal de Citrino, <br> con piedra engarzada con alpaca", precio: 1600},
   {id: "dijeCora", foto: "'../assets/img/dijecorazon.JPG'", nombre: "Dije Corazón", piedra: "Cuarzo Rosa", material: "Baño de plata", detalle: "Dije en forma de corazon, <br> con piedra y virola", precio: 600},
   {id: "dijeBello", foto: "'../assets/img/dijebellota.JPG'", nombre: "Dije Bellota", piedra: "Cuarzo Citrino y Pirita", material: "Alpaca", detalle: "Dije artesanal con lazo, <br> realizado con piedra en bruto <br>y polvo de pirita", precio: 1000},
   {id: "dijeGota", foto: "'../assets/img/dijegotaverde.JPG'", nombre: "Dije Gota", piedra: "Cuarzo Verde", material: "Baño de plata",  detalle: "Dije de Cuarzo verde, <br> con virola con baño de plata", precio: 700},
   
]

//Plantilla para los productos generados con jquery en dom

for (const prod of productosTienda) {
   $(".milista").append(`<li class="list-group-item item">
                        <img  class="item-image" src=${prod.foto} width="250" height="306"></img>
                        <h3 class="item-title titulo-card">${prod.nombre}</h3>
                            <div class="item-details"
                                    <p> Piedra: ${prod.piedra}</p>
                                    <p> Material: ${prod.material}</p>
                                    <p class="texto-detalle"> ${prod.detalle} </p>
                                <h4 class="item-price">Valor: $${prod.precio}</h4><br>
                                    <button class="item-button btn btn-info addToCart" id="add${prod.id}">Añadir al carrito</button>
                            </div>
                         </li>`);     
}

//Funcion para filtrar busquedas en la tienda

function buscarProducto () {
    //DOM 
    const input = document.getElementById("filtrar").value.toUpperCase();
    //console.log(input);
    const cardContainer = document.getElementById("listado-cards")
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName("list-group-item");
    console.log(cards);

    for(let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector("h3.item-title");
        console.log(title);

            if(title.innerText.toUpperCase().indexOf(input) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
 }
}

let productosCarrito = [];

//Funciones para estilo de las nuevas cards con jquery

$(function () {
$("#nuevos-productos").css({
           
            "backgroundColor": "#E8CBC0",
            "text-align": "center",
            "padding": "15px 0",
            });      
});

$(function () {
   $(".contenedorLista").css({
            "display": "flex",
            "background-color": "#E8CBC0",
            "aling-items": "center",
         });                         
});
   
$(function () {
   $(".milista").css({
               "font-size": "16px", 
               "text-align": "center", 
               "flex-flow": "row wrap",
               });
                           
});

$(function () {
   $(".texto-detalle").css({
               "flex-wrap": "wrap",
               });                          
});

$(function () {
   $(".list-group-item").css({
            "padding": "10px",
            "border": "lavender 5px groove",
            "margin": "15px 75px",
                  });                   
});

//Sin Jquery -----------------

//Carrito 
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addToCartClicked(event) {
        const button = event.target;
        const item = button.closest('.item');

        const itemTitle = item.querySelector('.item-title').textContent;
        const itemPrice = item.querySelector('.item-price').textContent;
        const itemImage = item.querySelector('.item-image').src;
        //console.log(':addtoCartClicked -> itemTitle', itemTitle, itemPrice, itemImage);
                Swal.fire(
                    'Nuevo producto agregado al carrito',
                    itemTitle.item,
                    'success'
                    );
            
        addItemToShoppingCart(itemTitle, itemPrice, itemImage);
    }

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {  
    //console.log(itemTitle, itemPrice, itemImage);
        const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
        for(let i = 0; i < elementsTitle.length; i++){  
            if (elementsTitle[i].innerText === itemTitle) {
                let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
                elementQuantity.value++;
                updateShoppingCartTotal();
                return;
            }
}

   //Creando las filas nuevas dinamicas de cada compra

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
                <div class="row shoppingCartItem filaProductoNuevo">
                    <div class="col-6">
                        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <img src=${itemImage} class="shopping-cart-image" width="100">
                            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div
                            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                                value="1">
                            <button class="btn btn-danger buttonDelete" type="button">X</button>
                        </div>
                    </div>
                </div>`
shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

updateShoppingCartTotal();
}


function updateShoppingCartTotal() {
        let total = 0;
        const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
         //console.log(':addtoShoppingCartTotal -> shoppingCartTotal', shoppingCartTotal);
        const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
      //console.log(':addtoShoppingCartTotal -> shoppingCartItems', shoppingCartItems);
        shoppingCartItems.forEach((shoppingCartItem) => {
          const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
            '.shoppingCartItemPrice'
          );
          const shoppingCartItemPrice = Number(
            shoppingCartItemPriceElement.textContent.replace('Valor: $', '')
          );
          console.log(shoppingCartItemPrice);
          const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
            '.shoppingCartItemQuantity'
          );
          const shoppingCartItemQuantity = Number(
            shoppingCartItemQuantityElement.value
          );
          total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        });
        shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`; //solo quiero dos decimales en el precio total
}

//Funcion para eliminar items del carrito 

function removeShoppingCartItem(event) {    
            const buttonClicked = event.target;
            buttonClicked.closest('.shoppingCartItem').remove();
        updateShoppingCartTotal();
}

function quantityChanged(event) {
            const input = event.target;
            if (input.value <= 0) { 
                input.value = 1;
            }
            updateShoppingCartTotal();
}

  //Cierre de compra 

function comprarButtonClicked() {   
            shoppingCartItemsContainer.innerHTML = '';
            const { value: okCarrito} = await = Swal.fire({ 
                icon: 'success',
                title : 'Gracias por realizar su compra! Su pedido será enviado a su correo electrónico',
            })
            if (okCarrito) {    
                Swal.fire(`${okCarrito}`)
            }
            
            updateShoppingCartTotal();
}