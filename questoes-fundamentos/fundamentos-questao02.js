const calcularAreaTriangulo = (a, b, c) => {
    const semiPerimetro = (a + b + c) / 2;
    const area = Math.sqrt(
      semiPerimetro * (semiPerimetro - a) * (semiPerimetro - b) * (semiPerimetro - c)
    );
    return area;
  };

  console.log(calcularAreaTriangulo(3, 4, 5)); 
  