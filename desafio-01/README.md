# DESAFIO 01

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

- Fase 1:
  - node fase-01.js;

- Fase 2:
  - node fase-02.js;

- Fase 3:
  - abrir o arquivo index.html no navegador ou utilizar o recurso Live Server;
  - após escolher o número de tentativas, posições do array e faixa de sorteio, clique no botão "Verificar Porta";
  - o valor dos campos deve ser maior ou igual a 2;
  - dentro do número de tentativas, será verificado:
    - 1 - se os números do array são iguais (vermelho);
    - 2 - se a tentativa subsequente é igual à anterior (verde);
    - validações 1 e 2 liberam Porta até o limite de 3, quando o jogo é finalizado;
    - nenhuma das validações acima (cinza);
