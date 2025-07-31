# Amigo Secreto 

Este proyecto es una pequeña aplicación web que permite simular el sorteo de un **amigo secreto**. A través de una interfaz sencilla en HTML y CSS, puedes añadir nombres de personas a una lista, visualizar la lista y realizar un sorteo aleatorio para saber quién será el amigo secreto. Es un ejercicio ideal para practicar la manipulación del DOM y la lógica básica en JavaScript.

## ¿Qué incluye este proyecto?

- **HTML** – Define la estructura básica de la página, con campos de entrada, botones y listas para mostrar la información.
- **CSS** – Proporciona estilos para una interfaz moderna y atractiva.
- **JavaScript** (`app.js`) – Contiene toda la lógica de la aplicación, desde la captura de entradas hasta la selección aleatoria.

## Instalación y uso

1. Clona o descarga este repositorio en tu equipo.
2. Abre el archivo `index.html` en tu navegador favorito. No se requieren dependencias adicionales ni entorno de compilación.
3. Utiliza el campo de texto para escribir el nombre de cada participante y pulsa **Añadir**. Cada nombre aparecerá en la lista de amigos.
4. Cuando hayas añadido todos los nombres, pulsa **Sortear amigo** para seleccionar un nombre al azar. El resultado se mostrará debajo de la lista.

## Estructura de archivos

- `index.html` – Marca la estructura de la página y contiene los elementos de entrada y salida.
- `style.css` – Define los estilos visuales de la página (colores, tamaños, fuentes y disposición).
- `app.js` – Implementa toda la lógica de la aplicación.
- `assets/` – Carpeta que contiene imágenes utilizadas en la interfaz. Si no dispones de las imágenes originales, puedes reemplazarlas por otras o eliminar las etiquetas `<img>` en el HTML.

## Lógica de la aplicación

En `app.js` se definen tres funciones principales:

- **`agregarAmigo()`**: Obtiene el valor del campo de entrada, valida que no esté vacío, lo añade al array global `amigos` y actualiza la lista visual. Si el campo está vacío, se muestra un mensaje de alerta solicitando al usuario que ingrese un nombre.
- **`actualizarLista()`**: Recorre el array `amigos` y actualiza el elemento `<ul>` en el DOM, limpiando primero la lista para evitar duplicados. Por cada amigo se crea un elemento `<li>` con su nombre.
- **`sortearAmigo()`**: Verifica que haya elementos en el array, genera un índice aleatorio utilizando `Math.random()` y `Math.floor()`, recupera el nombre correspondiente y lo muestra en pantalla. Si la lista está vacía, se informa al usuario que no hay amigos para sortear.

Cada vez que agregas un nombre se limpia el campo de entrada para mayor comodidad. La lista se mantiene sincronizada con los datos almacenados y el resultado del sorteo se presenta de forma clara en la pantalla.

## Contribuciones

Si deseas mejorar este proyecto o añadir nuevas funcionalidades, ¡adelante! Puedes abrir un _pull request_ o crear un _issue_ con tus sugerencias. Este repositorio es ideal para practicar conceptos básicos y divertirse al mismo tiempo.
