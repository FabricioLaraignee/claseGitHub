/* Números pares
Hagamos una función más. La función debe llamarse esPar, debe recibir un número como parámetro,
 y nos devolverá un booleano (true/false) indicándonos si ese número es divisible por dos.

Tips: utilizar la consola para probar la función esPar y observar si devuelve el resultado esperado. 
Recordar utilizar el operador módulo. */

function esPar (n){
    if (n===0){
        return true
    }
    return n%2
    }
    console.log(esPar(6))
