class strCalculator {
  add(numbers :string){
    if (!numbers) return 0; // handle empty string case

    let delimiter = /[,\n]/; // for newline & comma

    const numbersArray = numbers.split(delimiter).map(Number);
    return numbersArray.reduce((sum, num) => sum + num, 0);
  }


}

const calculator = new strCalculator();
console.log(calculator.add('2'))

export { strCalculator };
