
//Funcion para guardar nombre y trasladar a index/tienda

var nombreVisitante= document.getElementById("nombreVisitante");

let boton = document.getElementById("ingreso");
boton.addEventListener("click", guardarNombre);
function guardarNombre() {
	localStorage.setItem("nombreVisitante", nombreVisitante.value);
  
   }

//Evento Onclick para redirigir

function abrirNuevaPagina (){
    location.href = "pages/tienda.html";
}

//Animacion fade para boton inicio

$(".btn-portal").fadeOut().hide("slow", function(){

    //Cuando termina de ocultarse el elemento lo mostramos nuevamente
    $(".btn-portal").fadeIn(1000);
}); 

