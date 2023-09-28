function sumEvenNumbers(numbers) {
  const evenSum = numbers.reduce((sum, num) => sum + num, 0);
  const resultContainer = document.getElementById("result");
  resultContainer.innerText = `the sum of all elem. is : ${evenSum}`;
}
function convertStr() {
  const input = document.getElementById("numbersInput");
  const inputValue = input.value
    .split(",")
    .map((value) => parseInt(value.trim(), 10));
  sumEvenNumbers(inputValue);
}
document
  .getElementById("calculateButton")
  .addEventListener("click", convertStr);
