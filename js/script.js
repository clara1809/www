// INFORMACIÓN DE LOS LUGARES

function mostrarLugar(lugar) {

  const mensaje = document.getElementById("mensaje-lugar");


  if (lugar === "Times Square") {

    mensaje.innerHTML =
      "<strong>Times Square:</strong> uno de los lugares más famosos de Manhattan, conocido por sus enormes pantallas, teatros y movimiento constante.";

  }


  else if (lugar === "Central Park") {

    mensaje.innerHTML =
      "<strong>Central Park:</strong> el parque más famoso de Nueva York, ubicado en el centro de Manhattan.";

  }


  else if (lugar === "Estatua de la Libertad") {

    mensaje.innerHTML =
      "<strong>Estatua de la Libertad:</strong> uno de los principales símbolos de Nueva York y uno de los monumentos más reconocidos del mundo.";

  }

}


// FORMULARIO

const formulario =
  document.getElementById("formulario");


formulario.addEventListener("submit", function(event) {

  event.preventDefault();


  const nombre =
    document.getElementById("nombre").value;


  const mensaje =
    document.getElementById("mensaje-formulario");


  mensaje.textContent =
    "¡Gracias " + nombre + "! Te contactaremos pronto para empezar a planificar tu viaje a Nueva York.";


  formulario.reset();

});