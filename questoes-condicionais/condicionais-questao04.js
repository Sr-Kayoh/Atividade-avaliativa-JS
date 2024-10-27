const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [80, 85, 90]],
    ["Aluno4", [60, 70, 80]],
    ["Aluno5", [40, 50, 60]],
  ];
  
  alunos.forEach(([nome, notas]) => {
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    const status = media >= 70 ? "Aprovado" : "Reprovado";
    console.log(`${nome}, média ${media.toFixed(2)}, ${status}.`);
  });
  