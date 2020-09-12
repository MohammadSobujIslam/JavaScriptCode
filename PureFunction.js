// Now I am discuss Pure function

var n=6;

function sqr(n){
    //return n*n;
    console.log(n*n)

}

// console.log(sqr(5))
// console.log(sqr(5))
// console.log(sqr(5))
sqr(6)
console.log(n)
sqr(5)


function a(){///not pure function
    n=109

}
console.log(n)
a();
console.log(n)
var obj={
    x:100,
    y:200
}

function printobj(obj){
    // this is not pure function
    obj.x=200
   obj.y=100  
   console.log(obj)
}

console.log(obj)
printobj(obj);
console.log(obj)
//anunimous function
var addition=function(a,b){
    return a*b;
}
addition(2,4)
setTimeout(function(){
    console.log('I will response after 5 second ')
},5000)

console.log(addition(3,5))


