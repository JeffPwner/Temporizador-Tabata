// Import stylesheets
import { MyTimer } from './myTimer';
import './style.css';

// console.log('hello world!');

// let x = 10;
// console.log('O valor de x é: ' + x);

// //declaração de variável
// let texto: string = `Testando um texto com concatenação de número ${x}`;
// console.log(texto);

// //condicional if else
// console.log('Verificando condições');
// if (x % 2 == 0) {
//   console.log(`${x} é PAR`);
// } else {
//   console.log(`${x} é IMPAR`);
// }

// //laços de repetição for
// console.log('Usando um laço de repetição for');
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// //arrays
// console.log('Varrendo um array');
// let numbers: number[] = [10, 20, 30];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// console.log('Varrendo arrays com for each');
// numbers.forEach((n) => {
//   console.log(n);
// });

// //tupla
// let eu = ['João', 10];
// console.log(`Meu nome é ${eu[0]} e tenho ${eu[1]}`);

// //enum
// enum Color {
//   Red = 1,
//   Green = 2,
//   Blue = 3,
// }
// let color: Color = Color.Green;

// //any
// let semCerteza: any = 4;
// semCerteza = 'Acho que sou um texto';

// //functions
// function getSoma(n1: number, n2: number): number {
//   return n1 + n2;
// }

// console.log(`A soma de 2 e 3 é ${getSoma(2, 3)}`);
// function getNomeCompleto(pessoa: { nome: string; sobrenome: string }): string {
//   return `${pessoa.nome} ${pessoa.sobrenome}`;
// }
// console.log(
//   `Meu nome completo é ${getNomeCompleto({ sobrenome: 'Silva', nome: 'José' })}`
// );

document.getElementById('parimpar-button').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('parimpar-input')).value
  );

  if (num % 2 == 0) {
    document.getElementById('parimpar-div').innerHTML = 'O número é PAR';
  } else {
    document.getElementById('parimpar-div').innerHTML = 'O número é IMPAR';
  }
});

document.getElementById('tabuada-button').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('tabuada-input')).value
  );
  const table = document.getElementById('tabuada-table');
  table.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.innerHTML = `${num} x ${i}`;
    cell2.innerHTML = `${num * i}`;
  }
});

document.getElementById('aleatorios-button').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('aleatorios-input')).value
  );
  const table = document.getElementById('aleatorios-tbody');
  table.innerHTML = '';
  for (let i = 1; i <= num; i++) {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.innerHTML = `${i}`;
    cell2.innerHTML = `${Math.trunc(Math.random() * 50)}`;
  }
});

let myTimer = new MyTimer(document.getElementById('temporizador-span'));
document
  .getElementById('temporizador-start-button')
  .addEventListener('click', () => {
    myTimer.start();
  });

document
  .getElementById('temporizador-stop-button')
  .addEventListener('click', () => {
    myTimer.stop();
  });
