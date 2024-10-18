// variables are interdependent
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log("Array 1 and Array 2:")
console.log(arr1);
console.log(arr2);

arr1[2] = 10;

console.log("Array 1 and Array 2 after arr[2] = 10:")
console.log(arr1);
console.log(arr2);

// using for loops, the variables are independent of using other
let arr3 = [];

for(let i=0; i < arr1.length; i++){
    arr3[i] = arr1[i];
}

console.log("Array 1 and Array 3:")
console.log(arr1);
console.log(arr3);

arr3.push(4);

console.log("Array 1 and Array 3 after pushing '4' in Arr3:")
console.log(arr1);
console.log(arr3);