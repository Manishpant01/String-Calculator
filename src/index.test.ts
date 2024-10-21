import { strCalculator } from './index';
//Info: steps to be taken for creating str calculator

// steps:-
// 1. a function that take input a string of comma-separated numbers and return output as an integer, sum of the numbers
    // Input: “”, Output: 0
    // Input: “1”, Output: 1
    // Input: “1,5”, Output: 6
// 2. should handle empty string case
// 3. should handle single numbers and return a same integer number
// 4. should handle two comma-separated numbers and return sum of them
// 5. should handle an multiple amount of numbers and return sum of them
// 6. should handle new lines "/n" and return sum of them
// 7. should support different delimiters "//;\n"
// 8. should throw an error for negative numbers
// 9. should throw an error for multiple negative numbers

describe("StringCalculator", () => {
    let calculator: strCalculator;
  beforeEach(() => {
    calculator = new strCalculator();
  });

  it('should handle empty string case', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('should handle single numbers and return a same integer number', () => {
    expect(calculator.add('1')).toBe(1);
    expect(calculator.add('5')).toBe(5);
  });

  it('should handle two comma-separated numbers and return sum of them', () => {
    expect(calculator.add('1,2')).toBe(3);
    expect(calculator.add('3,5')).toBe(8);
  });

  it('should handle an multiple amount of numbers and return sum of them', () => {
    expect(calculator.add('1,2,3,4')).toBe(10);
    expect(calculator.add('5,10,15')).toBe(30);
  });

  it('should handle new lines "/n" and return sum of them', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
    expect(calculator.add('4\n5\n6')).toBe(15);
  });

  it('should support different delimiters "//;\n"', () => {
    expect(calculator.add('//;\n1;2;3')).toBe(6);
    expect(calculator.add('//|\n4|5|6')).toBe(15);
  });
 
});
