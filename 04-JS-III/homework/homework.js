// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];

}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i=0; i < array.length; i++){
   array[i]=array[i] +1; 
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
   //array[array.length]=elemento;
   array.push(elemento);
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  //return  array.unshif(elemento);
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena='';
  for(i=0; i < palabras.length; i++)
  {
    cadena+= palabras[i] + ' ';
  }
  return cadena.trim();
  //Despues de buscar jajajajajajajajajajajajaja  ;( me senti esfado por mi mismo.
  //return palabras.join('-');   
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i=0; i < array.length; i++){
    if (array[i]===elemento){
      return true;
    }
  } 
    return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  //numero - Math.floor(numero); 
  suma_enteros=0;
  for(i=0; i< numeros.length; i++){
   if (numeros[i]%1===0){ // es un entero
     suma_enteros=suma_enteros+numeros[i];
   }
  }
  return suma_enteros;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  S=0; P=0;
  for(i=0; i < resultadosTest.length ; i++){
   S+=resultadosTest[i];
  }
  P=S/resultadosTest.length;
  return P;
  //return agregarNumeros(resultadosTest) / resultadosTest.length; Esto lo vi en las soluciones y es mucho mejor.
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let Mayor=0;
  for(i=0; i < numeros.length; i++) {
    if (numeros[i]>=Mayor){
      Mayor=numeros[i];
    }
  }
  return Mayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:.
  if(arguments.length!=0){
    M=1;
    for(i=0; i < arguments.length; i++){
     M=arguments[i]*M;
    }
  }
  else{
     M=0;
  }
  return M;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
