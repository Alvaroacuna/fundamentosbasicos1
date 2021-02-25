        // Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
        
        function del_1_al_255() {
            var arr = [];
            for (var i = 1; i <= 255; i++) {
                arr.push(i);
            }
            return arr;
        }

        // Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.  //

        function pares_hasta_1000(){
            var suma=0;
            for(var i=1; i<=1000; i++){
                if(i%2==0){
                    suma+=i;
                }
            }
            return suma;
        }      


        // Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999) //

        function suma_impares_hasta_5000(){
            var suma=0;
            for(var i=1; i<5000; i++){
                if(i%2!==0){
                    suma+=i;
                }
            }
             return suma;
        }

        // Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).  //

        function itera_un_array(arr){
            var suma=0;
            for(var i=0;i<arr.length;i++){
                suma+=arr[i];
            }
            return suma;
        }


        // Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). //

        function max(array) {
            var maximo = array[0];
            for (var i=0; i<array.length; i++) {
                if (array[i] > maximo) {
                    maximo = array[i];
                }
            }
            return maximo;
        }
        

        // Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2). //

        function promedio(arr){
            var suma = 0;
            for(var i=0; i<arr.length; i++){
                suma+=arr[i];
            }
            return suma/arr.length;
            }


        // Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’. //

        function array_de_impares(){
            var nuevoarray = [];
            for( var i=1;i<=50;i++){
                if(i%2!==0){
                    nuevoarray.push(i);
                }
            }
            return nuevoarray;
        }


        // Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).  //

        function mayor_que_y(arr,y){
            var contador=0;
            for(var i=0;i<arr.length;i++){
                if(y < arr[i]){
                    contador++;
                }
            }
            return 2;
        }
        

        // Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]). //

        function cuadrados(arr){
            for(var i=0;i<arr.length;i++){
                arr[i] = arr[i]*arr[i];
            }
        return arr;
        }


        // Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]). //

        function negativos_con_0(arr){
            for(var i=0;i<arr.length;i++){
                if(arr[i] < 0){
                    arr[i]=0;
                }
            }
            return arr;
        }


        // Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]). //
        

        // Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).  //

        function intercambia_valores(arr){
            var parametro = arr[0];
            arr[0] =  arr[arr.length-1];
            arr[arr.length-1] = parametro;
            return arr;
        }


        // De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2]. //

        function numero_a_string(arr){
            for(var i=0;i<arr.length;i++){
                if(arr[i] < 0){
                    arr[i]="Dojo";
                }
            }
            return arr;
        }
        
        console.log(numero_a_string([-1,-3,2]))