const carro = {
    cidadePartida: 'Ribeirão Preto',
    cidadeChegada: 'Franca',
    velocidade: 110, // km/h
  };
  
  const caminhao = {
    cidadePartida: 'Franca',
    cidadeChegada: 'Ribeirão Preto',
    velocidade: 80, // km/h
    pedagios: 2,
    tempoPedagio: 5, // minutos
  };
  
  // Distância entre as cidades em km
  const distancia = 100;
  
  // Converter tempo de pedágio de minutos para horas
  const tempoPedagioHoras = caminhao.tempoPedagio / 60;
  
  // Calcular tempo total de viagem do caminhão
  const tempoViagemCaminhao = (distancia / caminhao.velocidade) + (caminhao.pedagios * tempoPedagioHoras);
  
  // Calcular tempo total de viagem do carro
  const tempoViagemCarro = distancia / carro.velocidade;
  
  // Calcular distância percorrida pelo caminhão
  const distanciaPercorridaCaminhao = caminhao.velocidade * tempoViagemCaminhao;
  
  // Calcular a distância restante para o caminhão chegar em Ribeirão Preto
  const distanciaRestanteCaminhao = distancia - distanciaPercorridaCaminhao;
  
  // Calcular a distância percorrida pelo carro quando o caminhão se encontrar
  const distanciaPercorridaCarro = carro.velocidade * (tempoViagemCaminhao - tempoViagemCarro);
  
  if (distanciaPercorridaCaminhao > distanciaRestanteCaminhao) {
    console.log(`O carro está mais próximo de Ribeirão Preto`);
  } else {
    console.log(`O caminhão está mais próximo de Ribeirão Preto`);
  }
  
//   estamos calculando a distância percorrida pelo caminhão considerando o tempo gasto em cada pedágio. Após isso, calcular a distância restante para o caminhão chegar em Ribeirão Preto, subtraindo a distância percorrida pelo caminhão até o ponto de encontro da distância total. No próximo passo, estamos calculando a distância percorrida pelo carro até o ponto de encontro com base no tempo total de viagem do caminhão e o tempo de viagem do carro. Finalmente, calculamos comparando as distâncias percorridas pelo caminhão e pelo carro a partir do ponto de encontro para determinar qual veículo está mais próximo de Ribeirão Preto.