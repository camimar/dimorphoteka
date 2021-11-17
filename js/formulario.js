
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
    //expresión regular, aún no se usarla, busqué cómo
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// guardar datos formulario en LS

  function guardarLS(){

	 var inputNombre= document.getElementById("nombreUsuario");
	 localStorage.setItem("nombreUsuario", inputNombre.value);

     var inputEmail= document.getElementById("email");
     localStorage.setItem("email", inputEmail.value);
	 
	 var inputContra= document.getElementById("contrasenia");
	 localStorage.setItem("contrasenia", inputContra.value);
    }

