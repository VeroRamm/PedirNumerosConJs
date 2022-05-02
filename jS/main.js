let nombre = document.getElementById("nombre");
let num = document.getElementById("num");
let num2 = document.getElementById("num2");
/*suma => num.value + num2.value;
resta => num.value - num2.value;
multiplicacion => num.value * num2.value;
division => num.value / num2.value;
*/
function sumar (num1, num2) {
    var suma = num1 + num2;
    return sumar;
}
function restar (num1, num2) {
    var restar = num1 - num2;
    return restar;
}
function multiplicar (num1, num2) {
    var multiplicacion = num1 * num2;
    return multiplicar;
}
function dividir (num1, num2) {
    var division = num1 / num2;
    return dividir;
}
function calcular(num, num2) {
    sumar();
    restar();
    multiplicar();
    dividir();
}  
function prueba () {
    document.write(`Hola ${nombre.value} <br>`);
    document.write(`El resultado de las operaciones matematicas entre ${num.value} y ${num2.value} es: ${calcular} <br>`);
}





