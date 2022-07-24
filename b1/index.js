var y = undefined;

// var có hoisting còn let vs cont thì ko có hoisting

// hoisting 

// console.log(a)

var x = 7;
var x = 10;
const a = 0;

// global : var
// scope {}

{
    var y = 9;
    const val = 0 ;
}

if(true){
    let g = 0;
    console.log(x);
}

console.log(y);

const newVal = 10; // cannot reassign
const arr =[1]
arr.push(1)
const obj = {}
obj.name = "hiếu";
console.log(arr);
console.log({obj});
// date types

// primitve
String
Number

// reference
Object
Array

// arrow function
// this === context
// luôn lấy context to nhất gần nó nhất
const getData = () =>{

};

function getnewData (){}

const button = document.querySelector("#button");
button.addEventListener("click", () =>{
    console.log(this)
});

import {sub} from "./module.js";

// console
const ref = 123
console.log(sub(3,2));
console.log(`hieu${ref}` + 123);

// spread & rest
// spread ...
const newObj = {
    name: 'hiếu',
    address:{
        street: 'PNT'
    }
};

// shallow copy
const newObj1 = {... newObj};
newObj1.address.street = "hieu";
console.log(newObj);

const arr1 = [1, 2, 4];
const arr2 = [... arr1];

