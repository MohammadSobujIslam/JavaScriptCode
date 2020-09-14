// Today i discuss higher order function
console.log("\nWell come to higher order function\n")
var arr=[2,4,5,6,64,62,66,77]
console.log(arr)
console.log(arr[3])
arr.push([1,43,66,])
console.log(arr)
console.log("new line\n")
arr.forEach(function(element){
    console.log(element)
})
// this procedure are same here function is create out side of function
function cbf(a){
    console.log(a);
}
console.log("same system in array travers")
arr.forEach(cbf)
// Higher Order function explain given below here
function caller(){
    return function(name){
        return 'caller calling you'+' '+name;
    }
}
// var x=caller;
// console.log(x)
var xr=caller();
console.log(xr)
yr=xr('ki sobuj')
console.log(yr)
y=xr('hi mohammad')
console.log(y)
var dr=caller()("hi tarin")
console.log(dr)