const testables = () => {
  const capitalize = (stringToCaps) =>
    stringToCaps.charAt(0).toUpperCase() + stringToCaps.slice(1)

  const reverseString = (stringToRev) => {
    const stringArray = stringToRev.split('')
    const stringArrayRev = stringArray.reverse()
    console.log(stringArrayRev)
    return stringArrayRev.join('')
  }

  return { capitalize, reverseString }
}

export default testables
