//prevenir default
const form = document.getElementById("formulario");
form.addEventListener('submit', e => {
  
	e.preventDefault();
	
});

//con jquery funcion completa para validar el registro en el formulario 
$(document).ready(function() {
    $("#boton-formulario-registro").click(function() {

        validarDatos();
    });

function validarDatos() {
//hago una clase constructora para el usuario
class Usuario {
    constructor(username, pass, email) {
        this.username = username;
        this.password = pass;
        this.email = email;
    }
}
//declaracion de variables para cada dato en el input que ingrese el usuario
var username = $("#nombreUsuario").val();
var email = $("#email").val();
var password = $("#contrasenia").val();
var repass = $("#contrasenia2").val();

//para los mensajes de error
$("#error1").text("");
$("#error2").text("");
$("#error3").text("");
$("#error4").text("");
//quitar las class
$("#nombreUsuario").removeClass('errorClass').removeClass('okClass');
$("#email").removeClass('errorClass').removeClass('okClass');
$("#contrasenia").removeClass('errorClass').removeClass('okClass');
$("#contrasenia2").removeClass('errorClass').removeClass('okClass');

//llamo las funciones de comprobacion
comprobarCampoNombre();
comprobarCampoEmail();
comprobarCampoPassword();
comprobarCampoRepPassword();

//condicional para ejecucion de funciones de validacion
if ((comprobarCampoNombre() == true) && 
(comprobarCampoEmail() == true) && 
(comprobarCampoPassword() == true) && 
(comprobarCampoRepPassword() == true)) {

//creando el objeto desde la clase

const usuario1 = new Usuario();
usuario1.username = username;
usuario1.password = password;
usuario1.email = email;

//guardando en ls
localStorage.setItem("datosUsuario", usuario1.username);
console.log(usuario1);

username.value = "";
email.value = "";
password.value = "";
repass.value = "";

swal.fire({
title: "Registro completo!",
text: "Se te redireccionará a la tienda",
type: "success"
    }).then(function() {
        window.location = "tienda.html";
        });
} //cierre condicional
        
//funciones de comprobacion de cada campo
function comprobarCampoNombre() {
    if (username.length != "") {
        var regexNombre = /^[A-Za-z0-9]+$/g;
        var esValido = regexNombre.test(username);
            if (!esValido) {
                $("#error1").text("* El nombre de usuario no puede tener caracteres especiales ni espacios en blanco");                       
                $("#nombreUsuario").addClass('errorClass');
                    return false;
                }
    } else {
        $("#error1").text("* Este campo no puede quedar vacío")                  
        $("#nombreUsuario").addClass('errorClass');
            return false;
            }
        $("#nombreUsuario").addClass('okClass');
         return true;
    }

function comprobarCampoEmail() {
    if (email.length != "") {
        var regexEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var esValido = regexEmail.test(email);
    if (!esValido) {
        $("#error2").text("* No es un email válido. Proba este formato: hola@dimorphoteka.com)");
        $("#email").addClass('errorClass');
                return false;
    }
    } else {
        $("#error2").text("* Este campo no puede quedar vacío");   
        $("#email").addClass('errorClass');
            return false;
    }
    $("#email").addClass('okClass');
           return true;
}

function comprobarCampoPassword() {
    if (password.length != "") {
        if (password.length > 7) {
            var regexAlfanumerico = /^[A-Za-z0-9]+$/;
            var esValido = regexAlfanumerico.test(password);
                if (esValido) {
                    $("#error3").text("* Tu contraseña debe poseer al menos un caracter especial");                         
                    $("#contrasenia").addClass('errorClass');
                    return false;
                }
    } else {
        $("#error3").text("* Tu contraseña debe poseer un mínimo de 8 caracteres");                        
        $("#contrasenia").addClass('errorClass');
            return false;
            }
    } else {
        $("#error3").text("* Este campo no puede quedar vacío");                 
        $("#contrasenia").addClass('errorClass');
             return false;
        }
    $("#contrasenia").addClass('okClass');
        return true;
}

function comprobarCampoRepPassword() {
    if (repass.length != "") {
        if (repass != password) {
            $("#error4").text("* Las contraseñas no son iguales. Reintentalo");                      
            $("#contrasenia2").addClass('errorClass');
                return false;
        }
    } else {
        $("#error4").text("* Este campo no puede quedar vacío");   
        $("#contrasenia2").addClass('errorClass');
            return false;
            }
        $("#contrasenia2").addClass('okClass');
            return true;
}
} //cierre funcion de validacion de datos
}); //cierre funcion general