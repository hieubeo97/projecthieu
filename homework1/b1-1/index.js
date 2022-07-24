// bài 1

let input = "abcdef";
let output = reverseString(input);
document.write(`Input: ${input} <br>`);
document.write(`Output: ${output}`);
function reverseString(str) {
    return str.split("").reverse().join("");
}

// bài 2

let input2 = [1,2,3,5,4,2,6,4];
let output2 =  input2.filter((value, index) => {
    return input2.indexOf(value) === index;
})
console.log(output2);

// bài 3 

function array_unique(array){
    array.sort();
    let max =[0,0];
    let count =1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] == array[i-1]) ++count; 
        else{        
            if (max[1] < count){              
                max[0] = array[i];
                max[1] = count;   
            }
            count = 1;
        }
    }
    return {value: max[0], count:max[1]}
}
let input3 = [1,2,3,5,6,4,2,1,6,3,5,3]
console.log(input3);
let output3 = array_unique(input3);
console.log(output3);

// chữa bài 3 
const arrNumber = [1,2,3,5,6,4,2,1,6,3,5,3]
const count = {}

for (const num of arrNumber){
    count[num] = count[num] ? count[num] + 1 : 1
}

console.log(count);
