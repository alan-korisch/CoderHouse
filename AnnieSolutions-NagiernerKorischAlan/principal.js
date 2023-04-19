function guardarDescripcion(servicio, descripcion) {
	if (!servicio || typeof servicio !== "string") {
	  console.log("Error: el nombre del servicio debe ser un string");
	  return;
	}
  
	if (!descripcion || typeof descripcion !== "string") {
	  console.log("Error: la descripción del servicio debe ser un string");
	  return;
	}
  
	// Creamos un objeto XMLHttpRequest para hacer una petición AJAX
	const xhr = new XMLHttpRequest();
  
	// Configuramos la petición AJAX
	xhr.open("POST", "/guardarDescripcion");
  
	// Configuramos el tipo de contenido que vamos a enviar en la petición
	xhr.setRequestHeader("Content-Type", "application/json");
  
	// Creamos un objeto con los datos que vamos a enviar en la petición
	const datos = {
	  servicio: servicio,
	  descripcion: descripcion,
	};
  
	// Convertimos los datos a JSON y los enviamos en la petición
	xhr.send(JSON.stringify(datos));
  }
  
	
  function mostrarCotizacion(servicio) {
	var precio;
	switch (servicio) {
	  case "riego":
		precio = 10000;
		break;
	  case "termotanque":
		precio = 8000;
		break;
	  case "aire":
		precio = 5000;
		break;
	  default:
		console.log("Error: Servicio inválido");
		return;
	}
	var descripcionGuardada = localStorage.getItem(servicio);
	var descripcion = descripcionGuardada ? descripcionGuardada : "Sin descripción";
	console.log("Cotización para " + servicio + ": $" + precio + " - " + descripcion);
  }
	
  function calcularCotizacion() {
	const nombreInput = document.getElementById("nombre");
	const apellidoInput = document.getElementById("apellido");
	if (!nombreInput.value || !apellidoInput.value) {
	  console.log("Error: debes completar el nombre y apellido");
	  return;
	}
	
	const aireCheckbox = document.getElementById("aire");
	const termotanqueCheckbox = document.getElementById("termotanque");
	const riegoCheckbox = document.getElementById("riego");
	
	let servicios = [];
	
	if (aireCheckbox.checked) {
	  servicios.push("aire");
	  guardarDescripcion("aire", "Instalación de aire acondicionado split");
	}
	
	if (termotanqueCheckbox.checked) {
	  servicios.push("termotanque");
	  guardarDescripcion("termotanque", "Instalación de termotanque eléctrico");
	}
	
	if (riegoCheckbox.checked) {
	  servicios.push("riego");
	  guardarDescripcion("riego", "Sistema de riego automático para jardines");
	}
	
	if (servicios.length === 0) {
	  console.log("Error: debes seleccionar al menos un servicio");
	  return;
	}
	
	let precioTotal = 0;
	
	for (let i = 0; i < servicios.length; i++) {
	  switch (servicios[i]) {
		case "aire":
		  precioTotal += 5000;
		  break;
		case "termotanque":
		  precioTotal += 8000;
		  break;
		case "riego":
		  precioTotal += 10000;
		  break;
		default:
		  break;
	  }
	}
	
	if (servicios.length > 1) {
	  precioTotal *= 0.9; // descuento del 10% para combinaciones de dos o más servicios
	}
	
	const cotizacion = document.createElement("p");
	cotizacion.textContent = `Hola ${document.getElementById("nombre").value} ${document.getElementById("apellido").value}, el precio total es de $${precioTotal}. Los servicios seleccionados son: ${servicios.join(", ")}.`;
	document.getElementById("cotizacion").innerHTML = "";
	document.getElementById("cotizacion").appendChild(cotizacion);
  
	for (let i = 0; i < servicios.length; i++) {
	  mostrarCotizacion(servicios[i]);
	}
  }
  