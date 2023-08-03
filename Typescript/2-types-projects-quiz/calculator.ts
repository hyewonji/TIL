/**
 * Let's make a calculator 🧮
 */
type Action = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate (action: Action, ...numbers: number[]): number {
  switch (action) {
    case 'add':
      return numbers.reduce((res, num) => res + num)
    case 'substract':
      return numbers.reduce((res, num) => res - num)
    case 'multiply':
      return numbers.reduce((res, num) => res * num)
    case 'divide':
      if (numbers.length !== 2) throw new Error('Divide need two number')
      return numbers[0] / numbers[1]
    case 'remainder':
      if (numbers.length !== 2) throw new Error('Remainder need two number')
      return numbers[0] % numbers[1]
    default:
      throw new Error('Unknown Action')
  }
}


console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
