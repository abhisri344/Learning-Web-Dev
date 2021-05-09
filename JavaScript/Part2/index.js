// Variables
var num=34;
var num2=36;
console.log(num + num2)


// Functions
function avg(a,b){
    return(a+b)/2;
}
var c1=avg(4,6);
var c2=avg(10,20);

console.log("C1 = ",c1,", C2 = ",c2);

// Conditionals
var age=10;
if (age>=18) {
    console.log('You are not a kid')
}
else
    console.log("You are a kid")

// Array
var arr=[1,2,3,4,5,6,7]

// Loop

// For loop
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// } 

// for each
// arr.forEach(function(a){
// console.log(a)
// });

// while
// let j=0;
// while (j<arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// dowhile
// let j=0;
// do{
//     console.log(arr[j]);
//     j++;
// }while (j<arr.length);

// Array Methods
let arr2=["fan","Camera",34,null,true];
console.log(arr2.length);

arr2.pop();
console.log(arr2);

arr2.push("abhi");
console.log(arr2);

let len=arr2.shift();
console.log(len);
console.log(arr2)

let len2=arr2.unshift(true);
console.log(len2);
console.log(arr2);

console.log(arr2.toString());

arr2.sort();
console.log(arr2); 

// arr2.splice()