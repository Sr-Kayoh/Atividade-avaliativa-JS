const verificarNumeros = (num1, num2) => {
    console.log(`Testando: ${num1}, ${num2}`);
    return num1 === 30 || num2 === 30 || (num1 + num2 === 30);
  };
  
 // Testes com alguns numeros: 
  console.log(verificarNumeros(30, 5)); 
  console.log(verificarNumeros(10, 20)); 
  console.log(verificarNumeros(15, 15)); 
  console.log(verificarNumeros(15, 5));  
  console.log(verificarNumeros(0, 20)); 
  console.log(verificarNumeros(20, 10)); 
  console.log(verificarNumeros(5, 5));    
