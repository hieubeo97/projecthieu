let x = prompt("Nhập mảng số nguyên phân cách bằng dấu ","");
let y = x.split(",").map(Number);
let newNum = new Array();
let c = y.length%2 == 0 ? y.length/2 : parseInt(y.length/2+ 1)
for( i=0; i <= c; i++ ) {
  newNum = [...newNum, y[i] * y[i+1]]
}
console.log(newNum);