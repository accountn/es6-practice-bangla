// function myCalculate(num){
//     return num * 3;
// }
// const myCalculate = function myFun(num){
//     return num * 2;
// }
const add = (a,b) => a + b;
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const mul = sum * diff;
    return mul;

}
const result = add(5,10);
const result2 = doMath(10,7);
console.log(result2);
