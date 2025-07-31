// El principal objetivo de este desafío es fortalecer tus habilidades en lógica
// de programación. A continuación encontrarás la solución completa para la
// aplicación de "Amigo Secreto" que permite añadir nombres a una lista y
// sortear un amigo al azar.

// Declaración del array global donde se almacenarán los nombres de los amigos
let amigos = [];

/**
 * Agrega un nombre a la lista de amigos.
 *
 * Esta función captura el texto ingresado por el usuario en el campo de
 * entrada, valida que el valor no esté vacío, añade el nombre al arreglo
 * global y actualiza la lista visual. En caso de que el campo esté vacío,
 * muestra un mensaje de alerta.
 */
function agregarAmigo() {
    // Obtener el elemento de entrada y su valor recortado
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el nombre no sea una cadena vacía
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Añadir el nombre al arreglo de amigos
    amigos.push(nombre);

    // Actualizar la lista de amigos en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada para una mejor experiencia de usuario
    input.value = '';
}

/**
 * Actualiza la lista visible de amigos en el DOM.
 *
 * Esta función selecciona el elemento con id "listaAmigos", limpia su
 * contenido y luego recorre el arreglo `amigos` creando un elemento
 * <li> por cada nombre. De esta manera, la lista siempre se mantiene
 * sincronizada con los datos almacenados.
 */
function actualizarLista() {
    // Seleccionar la lista donde se mostrarán los nombres
    const lista = document.getElementById('listaAmigos');

    // Vaciar el contenido de la lista para evitar duplicados
    lista.innerHTML = '';

    // Recorrer el arreglo de amigos y crear elementos de lista
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

/**
 * Realiza el sorteo de un amigo al azar.
 *
 * Esta función comprueba que exista al menos un elemento en el arreglo
 * `amigos`, genera un índice aleatorio con Math.random() y Math.floor(),
 * obtiene el nombre sorteado y lo muestra en la sección de resultados. Si
 * la lista de amigos está vacía, informa al usuario que no hay amigos
 * disponibles para sortear.
 */
function sortearAmigo() {
    // Seleccionar el elemento donde se mostrará el resultado
    const resultadoElemento = document.getElementById('resultado');

    // Limpiar cualquier resultado previo
    resultadoElemento.innerHTML = '';

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No hay amigos para sortear.';
        resultadoElemento.appendChild(li);
        return;
    }

    // Generar un índice aleatorio entre 0 y la longitud del arreglo menos uno
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultadoElemento.appendChild(li);
}
