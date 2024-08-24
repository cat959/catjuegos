//1. escojer que la persona escoja cara o sello
//2. que el programa escoja entre cara o sello
//3. comparar lo que escogio el usuario con lo que el programa dio
//4. ver el resultado de lo que salio

// como hacer un input en javascript 
let moneda = prompt("escribe entre cara y sello");
let numeroAleatoreo = Math.floor(Math.random());
console.log(numeroAleatoreo);
console.log(Math.random());
if (numeroAleatoreo === 1 && moneda === "sello" ){
    alert("ganaste por que cayo sello");    
}
else if (numeroAleatoreo === 0 && moneda === "cara" ){
    alert("ganaste por que cayo cara");    
}else{
    alert("perdiste")
}