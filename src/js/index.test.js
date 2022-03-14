import Testables from './index'

const testables = Testables()

test('check for initial letter caps', () => {
  expect(testables.capitalize('try this')).toMatch(/^[A-Z][a-zA-Z0-9\s]{1,19}$/)
})

test('check for reversed string', () => {
  expect(testables.reverseString('Reverse this')).toMatch('siht esreveR')
})
