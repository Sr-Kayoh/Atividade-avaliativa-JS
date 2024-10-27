const compararNumeros = (num1, num2) => {
    if (num1 > num2) {
      console.log(`${num1} é o maior número.`);
    } else if (num2 > num1) {
      console.log(`${num2} é o maior número.`);
    } else {
      console.log(`Os números são iguais.`);
    }
  };
  
  compararNumeros(5, 10);
  