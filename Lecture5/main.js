// console.log("hello world");



// let b = "hello";
// // let b="world";
// b="world";

// {
//     //only works for let and const
//   console.log(b);
//     let b=20;
//     console.log(b);
// }


// //var do not work for block scope
// var a = 5;
// {
//     console.log(a);
//     var a=20;
//     comsole.log(a);
// }
// console.log(a);



// const c = true;


// //undefined
// console.log(temp);
// var temp="this is temp";
// console.log(temp);

// //Cannot access 'temp2' before initialization(let,const) 
// jab tak let ko value assign nhi hoti tb tk vo dead temporal zone mai rhta h
// console.log(temp2);
// // dead temporal zone temp2 (unless it is assigned a value)
// let temp2="this is temp2";
// console.log(temp2);


// console.log(ar);
// var ar;
// console.log(ar);
// ar=10;
// console.log(ar);


// let arr=[1,2,3,"item 4",true,null,undefined];
// let twoDArr=[
//     [1,2,3],
//     [2,5,6]
// ]
// console.log(twoDArr);
// console.log(twoDArr)[1][1];  //5
// console.log(arr[4]);

//add item at beginning
// arrr=[1,2,3,4,5]
// // arr.unshift(50);
// arr.unshift(50,44,55);
// console.log(arrr);
// //delete from beginning
// arrr.shift();
// console.log(arrr);

//slice
let aa=[1,2,3,4,5];
// let subArr=aa.slice(2,4);
let subArr=aa.slice(2); //starts from 2nd till last
console.log(subArr);

//splice -> 3 workings
// (to delete replace or add any element in the middle)
console.log(aa);
aa.splice(3,1);  //1,2,3,5
aa.splice(3,3);   //1,2,3
console.log(aa);  


aa.splice(1,0,10);
aa.splice(1,0,10,11,12,13,14);
console.log(aa);  


let strAA= aa.toString();
let strAAA= aa.join("-");
console.log(strAA);  
console.log(strAAA);  


//string
let str="this is a string";
let newStr = str.replace("is","in");
let newStrr = str.replaceAll("is","in");
console.log(newStr);
console.log(newStrr);

//charAt
console.log(str.charAt(0)); 
console.log(str[0]); 

//starts with
console.log(str.startsWith("is"));  //boolean
//includes
console.log(str.includes("ri"));   //boolean
 
//ends with 
console.log(str.endsWith("ing"));


//split convert string to array

// let arr=str.split(" ");
let arr=str.split(" ")[0];
console.log(arr);