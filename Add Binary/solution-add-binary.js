function addBinary(a, b) {
  let result = "";
  let carry = 0; // Переменная для хранения переноса
  let i = a.length - 1;
  let j = b.length - 1;

  // Выполняем сложение с конца строки
  while (i >= 0 || j >= 0 || carry) {
    const bitA = i >= 0 ? parseInt(a[i], 10) : 0;
    const bitB = j >= 0 ? parseInt(b[j], 10) : 0;

    const sum = bitA + bitB + carry;
    result = (sum % 2) + result; // Добавляем текущий бит к результату
    carry = Math.floor(sum / 2); // Обновляем перенос

    i -= 1;
    j -= 1;
  }

  return result;
}
