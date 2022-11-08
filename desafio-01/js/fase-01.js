const numSorteio = 3;

let arr = [0, 0, 0];

// monta array
for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(Math.random() * numSorteio) + 1;
};

console.log(arr);
