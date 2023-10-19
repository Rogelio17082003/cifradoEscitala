function mayus(e) {
    e.value = e.value.toUpperCase();
}



function cifrar() {
    let mensaje = document.getElementById('mensaje').value;
    let columnas = parseInt(document.getElementById('clave').value);
    let resultado = '';
    let matriz = [];

    // Crear filas y luego columnas
    for (let i = 0; i < Math.ceil(mensaje.length / columnas); i++) {
        matriz.push([]);
        for (let j = 0; j < columnas; j++) {
            matriz[i].push(' ');
        }
    }
    let cont = 0;

    // Llenar la matriz de izquierda a derecha
    for (let i = 0; i < Math.ceil(mensaje.length / columnas); i++) {
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = mensaje[cont] || ' ';
            cont++;
        }
    }

    // Cambiar el orden de los bucles para cifrar  ads
    for (let i = 0; i < columnas; i++) {
        for (let j = 0; j < Math.ceil(mensaje.length / columnas); j++) {
            if (matriz[j][i] !== ' ') {
                resultado += matriz[j][i];
            } else {
                resultado += ' ';
            }
        }
    }

    let matrizHTML = '<p>Matriz:</p><table>';
    for (let i = 0; i < Math.ceil(mensaje.length / columnas); i++) {
        matrizHTML += '<tr>';
        for (let j = 0; j < columnas; j++) {
            matrizHTML += '<td>' + matriz[i][j] + '</td>';
        }
        matrizHTML += '</tr>';
    }
    matrizHTML += '</table>';
    document.getElementById('resultado').innerHTML = matrizHTML + '<p>Resultado cifrado: ' + resultado + '</p>';
}


function descifrar() {
    let mensaje = document.getElementById('mensaje').value;
    let columnas = parseInt(document.getElementById('clave').value);
    let resultado = '';
    let cont = 0;

    for (let i = 0; i < columnas; i++) {
        for (let j = 0; j < Math.ceil(mensaje.length / columnas); j++) {
            resultado += mensaje[cont] || ' ';
            cont++;
        }
    }
    document.getElementById('resultado').innerHTML = '<p>Resultado descifrado: ' + resultado + '</p>';
}
