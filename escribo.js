const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function divisiblesSum(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}


rl.question('Digite um número inteiro positivo:', (userInput) => {
  const number = parseInt(userInput);
  const result = divisiblesSum(number);
  console.log(`O somatório dos números divisíveis por 3 ou 5 menores que ${number} é: ${result}`);
  rl.close();
});
