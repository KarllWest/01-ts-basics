function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numberRes = getFirstElement<number>([1, 2, 3]);           // 1
const stringRes = getFirstElement<string>(["a", "b", "c"]);     // "a"
const boolRes = getFirstElement<boolean>([true, false, true]);  // true

console.log(numberRes, stringRes, boolRes);