const arr = ["banana" ,"apple","grapes",6];
arr.sort();   //changes the original array
console.log(arr);
console.log(arr.length);
console.log(typeof(arr));
console.log(arr[2]);
arr[3] = "orange";
console.log(arr);
let toArr = arr.toString();
let joined = arr.join(',');
console.log(toArr === joined);
const last = arr.pop();
console.log(last);
const add = arr.push("melon");
console.log(add);
console.log(arr);
console.log(arr.shift());
let arr1 = arr.unshift("mango");
console.log(arr1);
console.log(arr);
delete(arr[1]);
console.log(arr);

let vegetables = ["potato","onion"];
let cArr = arr.concat(vegetables);
console.log(cArr);

let  numbers = [1,2,4,5,6,7];
numbers.splice(2,0,45,46); // index,deletecount,add elements
console.log(numbers);
numbers.splice(4,1,16); // changes the original array
console.log(numbers);

console.log(numbers.slice(2,6));
let sliced = numbers.slice(2,7);
console.log(sliced);
sliced.reverse(); // changes the original array
console.log(sliced);
sliced.sort((a,b)=> a-b);
console.log(sliced);
// there is no method to  sort desc of strings arr
// first sort the arr then use reverse

let strArr = ["test","work","order","arr","str"];
strArr.sort().reverse();
console.log(strArr)
