import { validator } from './validator.js';

// 1 en el archivo index.html crear un input que recibirá los numeros
// 2.- en el archivo índex.js acceder con querySelector al input de índex.html
// 3 crear un evento sobre el input para cada vez que alguien escriba un texto, imprima un console.log(‘escribiendo’);
// 4 imprimir los números que reciba el input en consola

const input = document.querySelector('#creditCardNumber');
const resultMessage = document.querySelector('#resultMessage');
const hideDigitsButton = document.querySelector('#hideDigitsButton');

input.addEventListener('input', () => {
  console.log("Typing:", input.value);
});

document.querySelector('#validateCardButton').addEventListener('click', () => {
  const cardNumber = input.value;
  if (cardNumber === "") {
    resultMessage.textContent = "Please enter a card number.";
  }

  const isValid = validator.isValid(cardNumber);
  resultMessage.textContent = isValid ? "Valid card number" : "Invalid card number";
  hideDigitsButton.style.display = "inline-block"; // Mostrar el botón de ocultar dígitos
});

hideDigitsButton.addEventListener('click', () => {
  const cardNumber = input.value;
  input.value = validator.maskify(cardNumber);
});
