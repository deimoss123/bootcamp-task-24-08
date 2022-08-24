// task 5 from README
function funcOne(arr1, arr2) {
  // filters the 2nd array to remove duplicate values from arr1
  const filteredArr2 = arr2.filter((val) => arr1.indexOf(val) === -1);

  // merges the arrays
  const mergedArr = arr1.concat(filteredArr2);

  // sorts in ascending order and returns the array
  return mergedArr.sort();
}

// task 6 from README
function funcTwo(a, b) {
  return b in a;
}

// for testing
const arr1 = [1, 3, 2, -1];
const arr2 = [3, 4, 5, -1];
console.log("-- Task 5 --");
console.log(funcOne(arr1, arr2));

const obj = {
  name: "Daniels",
  age: 20,
};
const key1 = "name";
const key2 = "somethingElse";
console.log("\n-- Task 6 --");
console.log(funcTwo(obj, key1));
console.log(funcTwo(obj, key2));
