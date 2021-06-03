function comp(array1, array2){
  if (array1 == null || array2 == null) {
    return false
  }
  const arr1 = [...array1]
  const arr2 = [...array2].map(i => Math.sqrt(i))
  const sum1 = arr1.reduce((acc, currentValue) => acc + currentValue, 0)
  const sum2 = arr2.reduce((acc, currentValue) => acc + currentValue, 0)
  if(sum1 === sum2) {
    return true
  } else {
    return false
  }
}