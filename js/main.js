//Menu Hamburguesa responsive
jQuery ('document').ready(function($){

   var menuBtn = $('.menuIcon'),
      menu = $('.navigation ul');
  
   menuBtn.click(function() {
  
      if( menu.hasClass('show') ) {
  
      menu.removeClass('show');
  
      } else {
  
      menu.addClass ('show');
      }
  
      });
  
  });

//Saludo inicial en portal y trasladando dato a otro html

const saludoUsuario = document.getElementById("nombre-visitante");
const nombreLS = localStorage.getItem('nombreVisitante');
saludoUsuario.innerText = nombreLS;

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
