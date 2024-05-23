const validator = {

  isValid: (cardNumber) => {
    const digitsArray = Array.from(cardNumber).map(Number); // Convertir números a un arreglo de dígitos
    const reversedDigits = digitsArray.slice().reverse(); // Invertir el arreglo de dígitos

    // Algoritmo de Luhn
    let sum = 0;
    for (let i = 0; i < reversedDigits.length; i++) {
      let digit = reversedDigits[i];
      if (i % 2 !== 0) { // Duplicar cada segundo dígito
        digit *= 2;
        if (digit > 9) {
          digit -= 9; // Si el resultado es mayor a 9, restarle 9  
        }
      }
      sum += digit;
    }

    return sum % 10 === 0; // Será tarjeta válida si la suma es múltiplo de 10
  },

  maskify: (cardNumber) => { // Reemplazar los dígitos por "#" menos los últimos 4 dígitos 
    if (cardNumber.length <= 4) {
      return cardNumber;
    }
    return "#".repeat(cardNumber.length - 4) + cardNumber.slice(-4);
  }
};

export { validator };
