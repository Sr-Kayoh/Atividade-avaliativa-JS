const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [65, 70, 75]],
    ["Aluno4", [85, 90, 92]],
    ["Aluno5", [40, 50, 60]]
];

alunos.forEach(aluno => {
    const nome = aluno[0];
    const notas = aluno[1]; 
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;

    const status = media < 70 ? "Reprovado" : "Aprovado";
    console.log(`${nome}, média ${media.toFixed(2)}, ${status}.`);
});
