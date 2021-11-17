//Saludo inicial en portal y trasladando dato a otro html

const saludoUsuario = document.getElementById("nombre-visitante");
const nombreLS = localStorage.getItem('nombreVisitante');
saludoUsuario.innerText = nombreLS;

//Array de objetos en stock

const productosEnStock = [
   {id: "anilloAma", nombre: "Anillo Amatista", piedra: "Amatista", material: "Alpaca", precio: 900},
   {id: "dijeRosa", nombre: "Dije Cuarzo Rosa", piedra: "Cuarzo Rosa", material: "Alpaca", precio: 2800},
   {id: "dijeCitri", nombre: "Dije Citrino", piedra: "Cuarzo Citrino", material: "Alpaca", precio: 1600},
   {id: "dijeCora", nombre: "Dije Corazón", piedra: "Cuarzo Rosa", material: "Baño de plata", precio: 600},
   {id: "dijeBello", nombre: "Dije Bellota", piedra: "Cuarzo Citrino y Pirita", material: "Alpaca", precio: 1000},
   {id: "dijeGota", nombre: "Dije Gota", piedra: "Cuarzo Verde", material: "Baño de plata", precio: 700},
 ]

//Funcion para filtrar busquedas en la tienda

function buscarProducto () {
   //DOM 
   const input = document.getElementById("filtrar").value.toUpperCase();
   //console.log(input);
   const cardContainer = document.getElementById("contenedorCards")
   console.log(cardContainer);

   const cards = cardContainer.getElementsByClassName("card");
   console.log(cards);

   for(let i = 0; i < cards.length; i++) {
      let title = cards[i].querySelector(".card-body h5.card-title");
      console.log(title);

         if(title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
         } else {
            cards[i].style.display = "none";
         }
   }
}

//Array productos descuento para tabla

const productosDescuento = [
   {id: "promo1", nombre: "Anillo Cuarzo Verde", piedra: "Cuarzo Verde", material: "Alpaca", precioAntes: 1050, precioActual: 900},
   {id: "promo2", nombre: "Dije Pirita", piedra: "Pirita", material: "Alpaca", precioAntes: 1850, precioActual: 1500},
   {id: "promo3", nombre: "Dije Turmalina", piedra: "Turmalina", material: "Alpaca", precioAntes: 1600, precioActual: 1370},
]

//Tabla de productos de Array Promo generada con DOM

let tabla = document.createElement("table");
tabla.setAttribute("class", "table table-striped");
let tablaBody = document.createElement("tbody");

for (const producto of productosDescuento) {

//Fila tr y luego celdas td

let fila = document.createElement("tr");

fila.innerHTML = 
   `<td> ${producto.nombre}</td>
   <td> ${producto.piedra}</td>
   <td> ${producto.material}</td>
   <td><del>${producto.precioAntes}</del></td>
   <td><strong> $ ${producto.precioActual}</strong></td>`

tablaBody.appendChild(fila);

}

tabla.appendChild(tablaBody); 
document.getElementById("tabla-dom").appendChild(tabla);


//Variacion de la funcion mostrar y ocultar con show y hide

jQuery(function () {

   $("#btn-mostrar-ocultar").on("click", function() {
   
         if ($("#tabla-dom").is(":visible")) {
            $("#tabla-dom").hide();
            $("#btn-mostrar-ocultar").text("Mostrar");
         } else {
         $("#tabla-dom").show();
         $("#btn-mostrar-ocultar").text("Ocultar");
   
   }
   
   })
   
   })

//Animación fade de la tabla de descuentos 

$("#btn-mostrar-ocultar").on("click", function() {
   $("#tabla-dom").fadeIn(1000, function () {
      $("#tabla-dom").fadeIn(1000);
   });
});

//Animacion slide cards de productos - se activa con boton ver ingresos

$(".contenedorLista").fadeOut().hide()

$("#ver-productos").on('click', function() {
	$(".contenedorLista").slideToggle(1000);
});


//Scroll con icono carrito

let scroll = document.getElementbyId("iconoCarrito");
scroll.addEventListener("click", (e) => {
	document.documentElement.scrollTo(0, 4000)
});