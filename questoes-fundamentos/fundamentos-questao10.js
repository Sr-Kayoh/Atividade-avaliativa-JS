const converterNome = (nomeCompleto) => {
    const partes = nomeCompleto.split(' ');
    const sobrenome = partes.pop();
    const nome = partes.join(' ');
    const iniciais = partes.map(p => p.charAt(0).toUpperCase() + '.').join(' ');
    
    return `${iniciais} ${sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1)}`;
  };
  

  console.log(converterNome("Alan Mathison Turing"));

  