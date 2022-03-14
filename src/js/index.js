const testables = () => {
  const capitalize = (stringToCaps) =>
    stringToCaps.charAt(0).toUpperCase() + stringToCaps.slice(1)

  const reverseString = (stringToRev) => {
    const stringArray = stringToRev.split('')
    const stringArrayRev = stringArray.reverse()
    console.log(stringArrayRev)
    return stringArrayRev.join('')
  }

  const addition = (num1, num2) => num1 + num2
  const subtraction = (num1, num2) => num1 - num2
  const division = (num1, num2) => num1 / num2
  const multiplication = (num1, num2) => num1 * num2

  return {
    capitalize,
    reverseString,
    addition,
    subtraction,
    division,
    multiplication,
  }
}

export default testables
