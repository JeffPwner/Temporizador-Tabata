// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log('hello world!');

let x = 10;
console.log('O valor de x é: ' + x);

//declaração de variável
let texto: string = `Testando um texto com concatenação de número ${x}`;
console.log(texto);

//condicional if else
console.log('Verificando condições');
if (x % 2 == 0) {
  console.log(`${x} é PAR`);
} else {
  console.log(`${x} é IMPAR`);
}

//laços de repetição for
console.log('Usando um laço de repetição for');
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//arrays
console.log('Varrendo um array');
let numbers: number[] = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log('Varrendo arrays com for each');
numbers.forEach((n) => {
  console.log(n);
});

//tupla
let eu = ['João', 10];
console.log(`Meu nome é ${eu[0]} e tenho ${eu[1]}`);
