// 1.- Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

let array_255 = [];
function del_1_al_255() {
    for (let i=1; i<=255; i++) {
        array_255.push(i);
    }
    return array_255;
}
// la variable "let array_255" se declara afuera de la funcion para esta tenga un alcance global ya que si es declarada dendo de la funcion solo sera visible para la funcion.

// 2.- Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.
// i=i+2 o i=+2

let suma_de_pares = 0;
function pares_hasta_1000() {
    for (let i=0; i<=1000; i+=2) {
        suma_de_pares += i;
    }
    return suma_de_pares; 
}


// 3.- Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

let suma_de_impares = 1;
function impares_hasta_5000() {
    for (let i=0; i<=5000; i+=2) {
        suma_de_impares += i;
    }
    return suma_de_impares;
}

// 4.- Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

let arr = [1,-3,5,14];
function suma_valores_array(arr) {
    let suma = 0;
    for (let i=0; i<arr.length; i++){
        suma += arr[i];
    }
    return suma;
}

// 5.- Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

let max = [4,-3,6,17];
function encuentra_el_mayor(max) {
    let num_max = 0;
    for (let i=0; i<arr.length; i++){
        if (max[i] > num_max)  {
            num_max = max[i];
        }  
    }
    return num_max;
}

// 6.- Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

let avg = [2,1,12,-6]
function encuentra_el_avg(avg) {
    let suma = suma_valores_array(avg); 
    let promedio = suma / avg.length;
    return promedio;
}
// 7.- Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

let array_impares = [];
function del_1_al_50() {
    for (let i=1; i<=50; i+=2) {
        array_impares.push(i);
    }
    return array_impares;
}

// 8.- Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

let count = [];
function mayor_que_y(arr, y) {
    for (let i=0; i<arr.length; i++) {
        if (y < arr[i]) {
            count.push(arr[i])
        }
    }
    return count;
}

// 9.- Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
// El .push sirve para insertar valores al final de un array 

let cuadrado = [];
function cuadrados(arr) {
    for (let i=0; i<arr.length; i++) {
        cuadrado.push(arr[i]*arr[i]);
    }
    return cuadrado;
}

// 10.- Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

let negativo = [2,6,-5,7,-2,-1,9];
function negativos(negativo) {
    for (let i=0; i<negativo.length; i++) {
        if (negativo[i] < 0) {
          negativo[i] = 0;
        }
    }
    return negativo;
}


// 11.- Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
let max_min_avg = [2, 6, -5, 7];
function maximo_minimo_avg(max_min_avg) {
    let avg = encuentra_el_avg(max_min_avg);
    let max = encuentra_el_mayor(max_min_avg);
    let min = null; 
    for (let i=0; i<max_min_avg.length; i++){
      if (max_min_avg[i] < min) {
          min = max_min_avg[i];
      }
    } 
    return [max, min, avg];
}

// 12.- Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function intercambiar_valores(arr) {
    let temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}


// 13.- De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
let negativo = [2,6,-5,7,-2,-1,9];
function numero_a_string(negativo) {
    for (let i=0; i<negativo.length; i++) {
        if (negativo[i] < 0) {
          negativo[i] = "Dojo"; 
        }
    }
    return negativo;
}
numero_a_string(negativo)