//Ingreso 
let ingresar = document.getElementById("boton-entrar");
ingresar.addEventListener("click", function() {
	
	Swal.fire({
	   icon: "success",
	   title: "Ingreso correcto. Se redirigirá a la Tienda",
	   timer: 2000,
	   showConfirmButton: false,
   });

   setTimeout(function() {
	  location.href = "index.html";
    2900});
})

/*
//animacion fade para boton inicio

$(".btn-portal").fadeOut().hide("slow", function(){

    //Cuando termina de ocultarse el elemento lo mostramos nuevamente
    $(".btn-portal").fadeIn(1000);
}); 


//funcion para guardarNombre y trasladar a index/tienda

var nombreVisitante= document.getElementById("nombreVisitante");

let boton = document.getElementById("ingreso");
boton.addEventListener("click", guardarNombre);
function guardarNombre() {
	localStorage.setItem("nombreVisitante", nombreVisitante.value);
  
   }

//Evento Onclick para redirigir

function abrirNuevaPagina (){
    location.href = "index.html";
}
*/
