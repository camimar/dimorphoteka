/*const form = document.getElementById('formulario');
const nombreUsuario = document.getElementById('nombreUsuario');
const email = document.getElementById('email');
const contrasenia = document.getElementById('contrasenia');
const contrasenia2 = document.getElementById('contrasenia2');
 
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

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
				setErrorFor(contrasenia2, 'Este campo no puede estar vacío');
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

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});