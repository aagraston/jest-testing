const testables = () => {
  const capitalize = (stringToCaps) =>
    stringToCaps.charAt(0).toUpperCase() + stringToCaps.slice(1)

  return { capitalize }
}

export default testables
