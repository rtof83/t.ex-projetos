# DESAFIO 01
atividade proposta pelo Professor Roque em 07nov2022.

&nbsp;

## Foi utilizado para construção:
- HTML;
- CSS;
- JavaScript;
- Ferramentas:
  - Visual Studio Code 1.73.0;

&nbsp;

## Instruções

- Fase 1

  - criar um array dinâmico com X posições;
  - criar uma iteração que retorne números aleatórios;
  - a cada retorno, o valor do array respectivo será alterado;


- Fase 2

  - criar uma verificação que identifica se os números do array são iguais;
  - Se sim: escreva 'Porta 1: aberta';
  - Se não: escreva 'Tente de novo!';

- Fase 3

  - criar uma variável de controle para acumular a quantidade de vezes que os números se repetem;
  - criar uma variável que armazene o valor do último sorteio;
  - comparar o valor do último sorteio com o valor do sorteio atual;
  - Se os valores forem iguais: escreva 'Porta (x)' : aberta;
  - Se os valores forem diferentes: escreva 'Tente de novo' (Com a exceção do resultado ser de números iguais);

&nbsp;

## Inicialização

- [Fase 1](https://github.com/rtof83/t.ex-projetos/blob/main/desafio-01/js/fase-01.js):
  - node js/fase-01.js;

- [Fase 2](https://github.com/rtof83/t.ex-projetos/blob/main/desafio-01/js/fase-02.js):
  - node js/fase-02.js;

- [Fase 3](https://github.com/rtof83/t.ex-projetos/blob/main/desafio-01/index.html):
  - abrir o arquivo index.html no navegador ou utilizar o recurso Live Server;
  - após escolher o número de tentativas, posições do array e faixa de sorteio, clique no botão "Verificar Porta";
  - o valor dos campos deve ser maior ou igual a 2;
  - dentro do número de tentativas, será verificado:
    - combinação 1 - se os números do array são iguais (vermelho);
    - combinação 2 - se a tentativa subsequente é igual à anterior (verde);
    - nenhuma das validações acima (cinza);
    - validações 1 e 2 liberam Porta até o limite de 3, quando o jogo é finalizado;
