import { useEffect } from "react";
import styles from '../components/MatrixBackground.module.css';

const MatrixBackground = () => {
  useEffect(() => {
    const matrixContainer = document.getElementById('matrix-container');

    // Crear elementos de imágenes con el logo de Telegram
    for (let i = 0; i < 50; i++) {
      const img = document.createElement('img');
      img.src = '/tg3.png'; // Cambia la ruta a la ubicación de tu imagen
      matrixContainer.appendChild(img);

      // Tamaño personalizado de la imagen
      img.style.width = '30px'; // Cambia el ancho según tus necesidades
      img.style.height = '30px'; // Cambia la altura según tus necesidades

      // Asegúrate de que la imagen tenga posición absoluta
      img.style.position = 'absolute';

      // Función de animación
      function animate() {
        // Posicionamiento aleatorio en el ancho y altura del contenedor
        const randomLeft = Math.random() * 100;
        const displacement = Math.random() * 20; // Ajusta el valor según tus necesidades

        // Establecer posición inicial
        img.style.left = `${randomLeft}vw`;
        img.style.top = `${-Math.random() * 100}vh`; // Inicia arriba de la pantalla

        // Actualizar posición en cada cuadro de animación
        function updatePosition() {
          const currentTop = parseFloat(img.style.top);
          const newTop = currentTop + 0.1; // Velocidad de caída reducida, ajusta según tus necesidades
          const newLeft = randomLeft + (newTop * displacement) / 25; // Ajuste diagonal

          img.style.top = `${newTop}vh`;
          img.style.left = `${newLeft}vw`;

          // Verificar si la imagen ha alcanzado la parte inferior de la pantalla
          if (currentTop > 100) {
            // Reiniciar la posición arriba de la pantalla
            img.style.top = "-30vh";
          }

          // Volver a solicitar el próximo cuadro de animación
          requestAnimationFrame(updatePosition);
        }

        // Iniciar animación
        updatePosition();
      }
      
      // Iniciar animación para cada imagen
      animate();
    }
  }, []);

  return <div id="matrix-container" className={styles.matrixContainer}></div>;
};

export default MatrixBackground;
