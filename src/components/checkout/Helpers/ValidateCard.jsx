
const ValidateCard = (cardNumber) => {
  // Remove any non-digit characters
  cardNumber = cardNumber.replace(/\D/g, "");

  // Check if the card number is empty or not a 16-digit number
  if (!/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  // Convert the card number to an array of digits
  const digits = cardNumber.split("").map(Number);

  // Double every second digit from the right
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;

    // If the result is greater than 9, subtract 9
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }

  // Calculate the sum of all digits
  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  // Check if the sum is a multiple of 10 (valid checksum)
  return sum % 10 === 0;
};

export default ValidateCard;
