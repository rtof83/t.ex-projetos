const numSorteio = 3;

let arr = [0, 0, 0];
let result = true;

// monta array
for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(Math.random() * numSorteio) + 1;
};

// verifica se o array possui todos os números iguais
arr.forEach(item => {
  if (item !== arr[0]) result = false;
});

console.log(arr);
console.log(result ? 'Porta 1: aberta' : 'Tente de novo!');
