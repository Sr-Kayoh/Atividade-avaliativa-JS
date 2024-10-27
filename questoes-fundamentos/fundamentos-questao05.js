const checarNumerosIntervalo = (num1, num2, num3) => {
    if ((num1 >= 50 && num1 <= 99) && (num2 >= 50 && num2 <= 99) && (num3 >= 50 && num3 <= 99)) {
      return "Sucesso";
    } else {
      return "Erro: Um ou mais números estão fora do intervalo";
    }
  };
  
  console.log(checarNumerosIntervalo(55, 70, 90));  
  console.log(checarNumerosIntervalo(30, 80, 99));  
  