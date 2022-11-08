const verificaPorta = () => {
  const numSorteio = document.getElementById('txtSorteio').value;
  const tamanhoArray = document.getElementById('txtPosicoes').value;
  const numTentativas = document.getElementById('txtTentativas').value;

  let arr = [];
  let prevArr = [];
  let porta = [];
  let cont = 0;
  let lista = '';

  // valida valores
  if (numSorteio < 2 || tamanhoArray < 2 || numTentativas < 2)
    return alert('O valor dos campos deve ser maior que 2!');

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
    document.getElementById('arr').innerHTML += `Porta ${index+1} aberta na tentativa nº ${item}!<br />`;
  });
  porta.length > 2 ? document.getElementById('arr').innerHTML += 'Jogo finalizado!' : document.getElementById('arr').innerHTML += 'Tente novamente!';

  document.getElementById('message').innerHTML = `Em ${numTentativas} tentativas, ${cont === 1 ? `ocorreu ${cont} combinação` : `ocorreram ${cont} combinações`}!`;
  document.getElementById('result').innerHTML = lista;  
};
