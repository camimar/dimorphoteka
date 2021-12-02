
const form = document.getElementById('formulario');
const nombreUsuario = document.getElementById('nombreUsuario');
const email = document.getElementById('email');
const contrasenia = document.getElementById('contrasenia');
const contrasenia2 = document.getElementById('contrasenia2');
 

form.addEventListener('submit', e => {
    //prevenir default 
	e.preventDefault();
	
	checkInputs();
});

// Funciones para chequear los campos completados
function checkInputs() {
	//aca debo tomar los valores de los inputs y uso trim para los espacios en blanco
	const nombreUsuarioValue = nombreUsuario.value.trim();
	const emailValue = email.value.trim();
	const contraseniaValue = contrasenia.value.trim();
	const contrasenia2Value = contrasenia2.value.trim();
	
	if(nombreUsuarioValue === '') {
     
        //agregar una class para el error
		setErrorFor(nombreUsuario, 'El nombre de usuario no puede estar vacío');
	} else {
		setSuccessFor(nombreUsuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'El campo de email no puede estar vacío');
	} else if (!validarMail(emailValue)) {
		setErrorFor(email, 'El email no es valido');
	} else {
		setSuccessFor(email);
	}
	
	if(contraseniaValue === '') {
		setErrorFor(contrasenia, 'El campo de contraseña no puede estar vacío');
	} else {
		setSuccessFor(contrasenia);
	}
	
	if(contrasenia2Value === '') {
		setErrorFor(contrasenia2, 'El campo de confirmación de contraseña no puede estar vacío');
	} else if(contraseniaValue !== contrasenia2Value) {
		setErrorFor(contrasenia2, 'Las contraseñas no coinciden');
	} else{
		setSuccessFor(contrasenia2);
	}
	
}

// Funciones de errores y bien completados

function setErrorFor(input, message) {
	const formControl = input.parentElement; // el elemento padre .form-control 
	const small = formControl.querySelector('small');
    //aca una class para error
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//funcion para validar mail 

function validarMail(email) {
    //expresión regular
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// guardar datos formulario en LS

  function guardarLS(datosUsuario){

	 var inputNombre= document.getElementById("nombreUsuario");
	 localStorage.setItem("nombreUsuario", inputNombre.value);

     var inputEmail= document.getElementById("email");
     localStorage.setItem("email", inputEmail.value);
	 
	 var inputContra= document.getElementById("contrasenia");
	 localStorage.setItem("contrasenia", inputContra.value);

	
    }

 //alert de exito y redireccionamiento del registro cuando es exitoso

	let botonEntrar = document.getElementbyId("botonEntrada");
	botonEntrar.addEventListener("click", function() {
	
	Swal.fire({
	   icon: "success",
	   title: "¡Cuenta registrada con éxito!",
	   timer: 2000,
	   showConfirmButton: false,
   });

   setTimeout(function() {
	   window.location.href = "index.html";
   }, 1900);

   //console.log(datosUsuario);
});

// Luego del Registro, iniciar sesión 

//Boton para el ingreso 
/*
botonEntrar.addEventListener("click", validarIngreso);

function validarIngreso(e) {
    let usernameIngresado = username.value;
    let passwordIngresado = password.value;

    let usernameCreado = localStorage.getItem("username");
    let passwordCreado = localStorage.getItem("password");

    if (
        usernameIngresado === usernameCreado &&
        passwordIngresado === passwordCreado
    ) {
        e.preventDefault();

        Swal.fire({
            icon: "success",
            title: "¡Sesión iniciada correctamente!",
            showConfirmButton: false,
        });

        setTimeout(function() {
            window.location.href = "../pages/productos.html";
        }, 1900);
    } else {
        e.preventDefault();
        contenedorError.innerHTML =
            "<b class='error' style='color:red;'>* ¡Ingresaste un nombre de usuario o contraseña incorrecto, inténtalo de nuevo!</b>";
        document
            .getElementById("contenedor-formulario")
            .appendChild(contenedorError);
    }
}*/