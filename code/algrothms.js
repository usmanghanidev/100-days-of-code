console.log('run');

// Intermediate Algorithm Scripting: Sum All Numbers in a Range

// function sumAll(arr) {
//   if (!arr) return;

//   const max = Math.max(...arr);
//   const min = Math.min(...arr);

//   let result = 0;

//   for (let i = min; i <= max; i++) {
//     result = result + i;
//   }

//   return result;
// }

// function sumAll([first, last]) {
//   const step = first - last < 0 ? 1 : -1;
//   return first !== last ? first + sumAll([first + step, last]) : first;
// }

// console.log(sumAll([10, 20]));

function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2];

  return newArr.filter((num) => !arr1.includes(num) || !arr2.includes(num));
}

// console.log(diffArray([1, 3, 5, 2], [1, 5, 3, 4, 2]));

// Intermediate Algorithm Scripting: Seek and Destroy

function destroyer(arr) {
  const [array, ...arr2] = [...arguments];

  return array.filter((el) => !arr2.includes(el));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
