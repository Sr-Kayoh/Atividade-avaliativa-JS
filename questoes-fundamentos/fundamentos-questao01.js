const exibirDataHora = () => {
    const agora = new Date();
  
    const diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const diaDaSemana = diasDaSemana[agora.getDay()];
  
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    const horaAtual = `${horas}:${minutos}:${segundos}`;
  
    console.log(`Hoje é: ${diaDaSemana}.`);
    console.log(`A hora atual é: ${horaAtual}.`);
  };
  
  exibirDataHora();
  