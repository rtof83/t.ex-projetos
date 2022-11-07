const verificaPorta = () => {
  const numSorteio = 3;
  const tamanhoArray = 3;
  const numTentativas = 20;

  let arr = [];
  let prevArr = [];
  let porta = [];
  let cont = 0;
  let lista = '';

  document.getElementById('result').innerHTML = 'aguarde...';
  document.getElementById('arr').innerHTML = '';

  for (let i = 0; i < numTentativas; i++) {
    let result = true;

    // armazena array anterior
    prevArr = [...arr];

    // monta novo array
    for (let j = 0; j < tamanhoArray; j++) {
      arr[j] = parseInt(Math.random() * numSorteio) + 1;
    };

    // verifica se o array possui todos os números iguais
    arr.forEach(item => {
      if (item !== arr[0]) result = false;
    });
    
    let classeCor = '';
    // adiciona colorações diferentes se o conteúdo do array são iguais ou se o array atual é igual ao anterior
    if (result || arr.every((value, index) => value === prevArr[index])) {
      cont++;
      classeCor = result ? 'igual' : 'anterior';
      if (cont <= 3) porta[cont-1] = i+1;
    } else {
      classeCor = 'diferente';
    };

    // monta lista
    lista += `<div class="${classeCor}">[${arr}]</div>`;
  };

  porta.forEach((item, index) => {
    document.getElementById('arr').innerHTML += `Porta ${index+1} aberta na tentativa de nº ${item}!<br />`;
    if (index === 2) document.getElementById('arr').innerHTML += 'Jogo finalizado!';
  });

//   if porta.length === 3 && 

  document.getElementById('message').innerHTML = `Em ${numTentativas} tentativas, ocorreram ${cont} combinações iguais!`;

  document.getElementById('result').innerHTML = lista;  
};
