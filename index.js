// Este es tu archivo JavaScript principal (index.js)

// Puedes usar JavaScript para:
// 1. Añadir interactividad a los elementos HTML
// 2. Realizar validaciones de formularios
// 3. Cargar contenido dinámicamente
// 4. Crear animaciones complejas
// 5. Interactuar con APIs externas
// 6. Manipular el DOM (Document Object Model)

// Ejemplo básico: Mostrar un mensaje en la consola cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    console.log('¡La página de Sonic x Shadow Generations se ha cargado completamente!');

    // Puedes añadir más funcionalidades aquí.
    // Por ejemplo, si tuvieras un botón para "Más información", podrías añadir un evento click:
    /*
    const infoButton = document.getElementById('more-info-button');
    if (infoButton) {
        infoButton.addEventListener('click', () => {
            alert('Has hecho clic en el botón de información!');
        });
    }
    */

    // Otro ejemplo: Cambiar el color de un elemento al pasar el mouse
    /*
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.addEventListener('mouseover', () => {
            headerElement.style.backgroundColor = '#004080'; // Un azul más oscuro al pasar el mouse
        });
        headerElement.addEventListener('mouseout', () => {
            headerElement.style.backgroundColor = '#007bff'; // Vuelve al color original
        });
    }
    */
});

// Nota: Para que este archivo JS funcione, deberías enlazarlo a tus archivos HTML.
// Lo harías añadiendo la siguiente línea justo antes de la etiqueta </body> de cierre:
// <script src="index.js"></script>
