import Testables from './index'

const testables = Testables()

test('check for initial letter caps', () => {
  expect(testables.capitalize('try this')).toMatch(/^[A-Z][a-zA-Z0-9\s]{1,19}$/)
})

test('check for reversed string', () => {
  expect(testables.reverseString('Reverse this')).toMatch('siht esreveR')
})

test('check addition', () => {
  expect(testables.addition(45, 50)).toBe(95)
})

test('check addition', () => {
  expect(testables.subtraction(45, 50)).toBe(-5)
})

test('check addition', () => {
  expect(testables.division(6, 2)).toBe(3)
})

test('check addition', () => {
  expect(testables.multiplication(3, 6)).toBe(18)
})
