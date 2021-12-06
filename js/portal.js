
//Funcion para guardar nombre y trasladar a index/tienda

var nombreVisitante= document.getElementById("nombreVisitante");


let portal = document.getElementById("ingreso");
portal.addEventListener('click', (e) =>  {
	e.preventDefault();
    if (nombreVisitante.value.length != "") {

        localStorage.setItem("nombreVisitante", nombreVisitante.value);
    } else {
        swal.fire({
            title: "Error",
            text: "Necesitas completar este campo para ingresar",
            type: "error"
                })
    }

});


//Evento Onclick para redirigir

function abrirNuevaPagina (){
    if (nombreVisitante.value.length != "") {
    location.href = "pages/tienda.html";
}}

//Animacion fade para boton inicio

$(".btn-portal").fadeOut().hide("slow", function(){

    //Cuando termina de ocultarse el elemento lo mostramos nuevamente
    $(".btn-portal").fadeIn(1000);
}); 

