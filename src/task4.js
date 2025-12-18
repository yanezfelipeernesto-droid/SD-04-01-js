const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Escribe tu codigo por debajo de esta linea

for ( let i = 0; i< arr.length; i++){           /// recorrer todo el array de 1 en 1
  for( let j = i+1; j < arr.length; j++ ) {     /// recorrer todo el array desde el indice 1 
    if(arr[i] === arr[i]) {                     /// checando si los elementos son iguales comparando por medio de los indices
      arr.splice(j,1);        //elementos a eliminar 
      j--; //ajustar indice
    }

  }
 
}

// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
