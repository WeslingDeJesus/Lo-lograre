let precioHoras = prompt('¿Cuanto cobras por hora?');
let horasTrabajadas = prompt('¿Cuantas horas trabajas al dia?');

let salario = parseFloat(precioHoras) * parseFloat(horasTrabajadas);

if(salario >= 0){
    alert(`Tu salario al dia sera de ${salario}`);
}
else if(salario < 0){
    alert('Este mes no vas a cobrar');
}
else{
    alert('Por favor ingresa numeros validos');
}