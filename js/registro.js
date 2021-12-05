// JS para el Login
const form = document.getElementById("formulario");
form.addEventListener('submit', e => {
    //prevenir default 
	e.preventDefault();
	
});

$(document).ready(function() {
    $("#boton-formulario-registro").click(function() {

        validarDatos();
    });

    function validarDatos() {

        // Declaro constructor de Usuario
        class Usuario {
            constructor(username, pass, email) {
                this.username = username;
                this.password = pass;
                this.email = email;
            }
        }
        

        var username = $("#nombreUsuario").val();
        var email = $("#email").val();
        var password = $("#contrasenia").val();
        var repass = $("#contrasenia2").val();
        $("#p1").text("");
        $("#p2").text("");
        $("#p3").text("");
        $("#p4").text("");
        $("#nombreUsuario").removeClass('errorClass').removeClass('okClass');
        $("#email").removeClass('errorClass').removeClass('okClass');
        $("#contrasenia").removeClass('errorClass').removeClass('okClass');
        $("#contrasenia2").removeClass('errorClass').removeClass('okClass');
        comprobarCampoNombre();
        comprobarCampoEmail();
        comprobarCampoPassword();
        comprobarCampoRepPassword();

        if ((comprobarCampoNombre() == true) && (comprobarCampoEmail() == true) && (comprobarCampoPassword() == true) && (comprobarCampoRepPassword() == true)) {

            // Instancio el Usuario 

            const usuario1 = new Usuario();
            usuario1.username = username;
            usuario1.password = password;
            usuario1.email = email;

            localStorage.setItem("pasajeValor", usuario1.username);
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
        }
        

        function comprobarCampoNombre() {
            if (username.length != "") {
                var regexNombre = /^[A-Za-z0-9]+$/g;
                var esValido = regexNombre.test(username);
                if (!esValido) {
                    $("#p1").text("* El nombre de usuario no puede tener caracteres especiales ni espacios en blanco");
                        
                    $("#nombreUsuario").addClass('errorClass');
                    return false;
                }
            } else {
                $("#p1").text("* Este campo no puede quedar vacío")
                   
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
                    $("#p2").text("* No es un email válido. Proba este formato: hola@dimorphoteka.com)");
                        
                    $("#email").addClass('errorClass');
                    return false;
                }
            } else {
                $("#p2").text("* Este campo no puede quedar vacío");
                   
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
                        $("#p3").text("* Tu contraseña debe poseer al menos un caracter especial");
                          
                        $("#contrasenia").addClass('errorClass');
                        return false;
                    }
                } else {
                    $("#p3").text("* Tu contraseña debe poseer un mínimo de 8 caracteres");
                        
                    $("#contrasenia").addClass('errorClass');
                    return false;
                }
            } else {
                $("#p3").text("* Este campo no puede quedar vacío");
                  
                $("#contrasenia").addClass('errorClass');
                return false;
            }
            $("#contrasenia").addClass('okClass');
            return true;
        }

        function comprobarCampoRepPassword() {
            if (repass.length != "") {
                if (repass != password) {
                    $("#p4").text("* Las contraseñas no son iguales. Reintentalo");
                       
                    $("#contrasenia2").addClass('errorClass');
                    return false;
                }
            } else {
                $("#p4").text("* Este campo no puede quedar vacío");
                    
                $("#contrasenia2").addClass('errorClass');
                return false;
            }
            $("#contrasenia2").addClass('okClass');
            return true;
        }


    }
});