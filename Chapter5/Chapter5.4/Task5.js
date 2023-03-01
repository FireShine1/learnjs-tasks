function getMaxSubSum(arr) {
  let result = 0;
  let temp = 0;

  for (let number of arr) {
    temp += number;
    result = Math.max(result, temp);
    if (temp < 0) temp = 0;
  }

  return result;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([-1, -2, -3]) ); // 0