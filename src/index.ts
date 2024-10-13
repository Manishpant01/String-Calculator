class strCalculator {
  add(numbers: string): number {
    if (!numbers) return 0; // handle empty string case

    let delimiter = /[,\n]/; // default newline & comma

    //for //[delimiter]\n[numbers…]
    if (numbers.startsWith("//")) {
      const delimiterBeforeNewLine = numbers.substring(
        2,
        numbers.indexOf("\n")
      );
      delimiter = new RegExp(`[,\n${delimiterBeforeNewLine}]`); // update delimiter with new delimiter
      numbers = numbers.substring(numbers.indexOf("\n") + 1); // numbers after /n "new line"
    }

    const numbersArray = numbers.split(delimiter).map(Number); // convert str in array
    return numbersArray.reduce((sum, num) => sum + num, 0);
  }
}

const calculator = new strCalculator();
console.log(calculator.add(""));
console.log(calculator.add("1"));
console.log(calculator.add("2,3"));
console.log(calculator.add("2,3,7,5"));
console.log(calculator.add("1\n2,3"));
console.log(calculator.add("//|\n4|5|6"));
