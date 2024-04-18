const carrusel = document.querySelector('.carrusel');
const imagenes = document.querySelectorAll('.carrusel img');

let contador = 0; 

function moverCarrusel() {
  contador++;

  const desplazamiento = contador * -100;

  imagenes.forEach(imagen => {
    imagen.style.transform = `translateX(${desplazamiento}%)`;
  });

  if (contador === imagenes.length) {
    contador = 0;
  }
}

setInterval(moverCarrusel, 3000);