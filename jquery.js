//array productos 

const productosTienda = [

   {id: "puntaCuarzo", foto: "'assets/img/puntacuarzo.JPG'" , nombre: "Punta de Cuarzo Cristal", piedra: "Cuarzo Cristal", material: "Cristal", detalle: "Puntas de cuarzo en bruto", precio: 1100},
   {id: "dijeAgata", foto: "'assets/img/agata.jpeg'", nombre: "Dije corazón Azul", piedra: "Ágata azul", material: "baño de plata", detalle: "Dije de Ágata Azul pulida, <br> en forma de corazón", precio: 620},
   {id: "anilloPleya", foto: "'assets/img/anillopleyades.JPG'", nombre: "Anillo Pleyades", piedra: "no", material:"Acero dorado", detalle: "Anillo labrado de acero dorado", precio: 500},
   {id: "arosB", foto: "'assets/img/arosboti.jpg'", nombre: "Aros Botticelli", piedra: "no", material: "Acero dorado", detalle: "Aros tipo chapon colgante en <br>forma de Ostra. Acero dorado", precio: 790},
   {id: "cuarzoR", foto: "'assets/img/cuarzorolado.jpeg'", nombre: "Cuarzo Rosa Rolado", piedra: "Cuarzo Rosa", material: "no", detalle: "Cristales de cuarzo rosa rolado. <br> Precio por unidad", precio: 180},
   {id: "anilloVer", foto: "'assets/img/anilloverde.jpeg'", nombre: "Anillo Cuarzo Verde", piedra: "Cuarzo Verde", material: "Alpaca", detalle: "Anillo artesanal regulable, <br> con piedra de dos puntas", precio: 900}, 
   {id: "anilloAma", foto: "'assets/img/anillo.JPG'", nombre: "Anillo Amatista", piedra: "Amatista", material: "Alpaca", precio: 900},
   {id: "dijeRosa", foto: "'assets/img/dijecuarzo.JPG'",nombre: "Dije Cuarzo Rosa", piedra: "Cuarzo Rosa", material: "Alpaca", precio: 2800},
   {id: "dijeCitri", foto: "'assets/img/citrino.JPG'", nombre: "Dije Citrino", piedra: "Cuarzo Citrino", material: "Alpaca", precio: 1600},
   {id: "dijeCora", foto: "'assets/img/dijecorazon.JPG'", nombre: "Dije Corazón", piedra: "Cuarzo Rosa", material: "Baño de plata", precio: 600},
   {id: "dijeBello", foto: "'assets/img/dijebellota.JPG'", nombre: "Dije Bellota", piedra: "Cuarzo Citrino y Pirita", material: "Alpaca", precio: 1000},
   {id: "dijeGota", foto: "'assets/img/dijegotaverde.JPG'", nombre: "Dije Gota", piedra: "Cuarzo Verde", material: "Baño de plata", precio: 700},
   
   ]

//Plantilla para los productos generados con jquery en dom
for (const prod of productosTienda) {
   $(".milista").append(`<li class="list-group-item">
                     <img src=${prod.foto} width="250" height="306"></img>
                     <h4 class="titulo-card"> ${prod.nombre}</h4>
                     <p> Piedra: ${prod.piedra}</p>
                     <p> Material: ${prod.material}</p>
                     <p class="texto-detalle"> ${prod.detalle} </p>
                     <b> $ ${prod.precio}</b><br>
                     <button class='btn btn-info store-item-icon' id='add${prod.id}'>Comprar</button></li>`);
 
    //Eventos para cada boton
    $(`#add${prod.id}`).on('click', function() {
                agregarAlCarrito(prod); //se agrega todo el producto como parametro
                        });
                        
}

//Funcion para filtrar busquedas en la tienda

function buscarProducto () {
   //DOM 
   const input = document.getElementById("filtrar").value.toUpperCase();
   //console.log(input);
   const cardContainer = document.getElementById("contenedorCards")
   console.log(cardContainer);

   const cards = cardContainer.getElementsByClassName("list-group-item");
   console.log(cards);

   for(let i = 0; i < cards.length; i++) {
      let title = cards[i].querySelector(".list-group-item h4.titulo-card");
      console.log(title);

         if(title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
         } else {
            cards[i].style.display = "none";
         }
   }
}

let productosCarrito = [];

function agregarAlCarrito(productoNuevo) {
    productosCarrito.push(productoNuevo);
    console.log(productosCarrito);
    Swal.fire(
        'Nuevo producto agregado al carrito',
        productoNuevo.nombre,
        'success'
    );
   
    mostrarCompra () 
   // localStorage.setItem("miCarrito", JSON.stringify(carrito));
}

//Funciones para estilo de las nuevas cards con jquery

$(function () {
$("#nuevos-productos").css({
           
            "backgroundColor": "rosybrown",
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

//sin Jquery
//Agregar array carrito a tabla con DOM

let table = document.createElement("table");
table.setAttribute("class", "table table-striped");

let tableBody = document.createElement("tbody");

const mostrarCompra = () => {

    tableBody.innerHTML = "";

    productosCarrito.forEach( (prod) => {
        const tr = document.createElement('tr')
        tr.className = "table-primary"
        tr.innerHTML =
            `<th scope = "row"> ${prod.id}</th>
	        <td> ${prod.nombre}</td>
	        <td> ${prod.precio}</td>`

        tableBody.appendChild(tr)

        sumarCompra();
    })

}

document.getElementById("tabla-dom2").appendChild(tableBody);


//Sumado de total

const sumarCompra = () => {
   let total = 0
   for (const prod of productosCarrito) {
       total += prod.precio;
       console.log(total);
       tot.innerText = total;
   }
};

// Ubicacion de esa suma en el DOM

$("#totalCompra").append(`
<span id="tot"></span>
`);

$(function () {
   $("#totalCompra").css({
            "font-size":"25px",
            "font-family": "Verdana", 
            "font-style": "italic",
            "color": "#636FA4",
            "align-items": "center",
            "margin": "15px",
            "padding-left": "35px",
                  });
                              
      });

  