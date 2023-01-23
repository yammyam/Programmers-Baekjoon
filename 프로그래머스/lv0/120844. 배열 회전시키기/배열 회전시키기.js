function solution(numbers, direction) {
  let temp = 0;
  if (direction === "left") {
    temp = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      numbers[i - 1] = numbers[i];
    }
    numbers[numbers.length - 1] = temp;
  }
  if (direction === "right") {
    temp = numbers[numbers.length - 1];
    for (let i =  numbers.length - 2; i >= 0; i--) {
      numbers[i + 1] = numbers[i];
    }
    numbers[0] = temp;
  }

  return numbers;
}