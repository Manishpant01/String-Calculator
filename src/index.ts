class strCalculator {
  add(numbers: string): number {
    if (!numbers) return 0; // handle empty string case

    const delimiter = ",";

    const numbersArray = numbers.split(delimiter).map(Number); // convert str in array
    return numbersArray.reduce((sum, num) => sum + num, 0);
  }
}

const calculator = new strCalculator();
console.log(calculator.add(''))
console.log(calculator.add('1'))
console.log(calculator.add('2,3'))
