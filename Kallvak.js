<<<<<<< HEAD
function callback1(a,b) { 
    c=a+b
    d=a-b
    return c+d
}
console.log(v=callback1(5,8  ))
function sum(a,b){
    return a+b;
}
function callback2(a,b) { 
    c=a+b
    d=a-b
    result=sum(c,d);
    return result;
}
// var say=callback2;
//  
console.log(callback2(3,4))

function callback(a,b,fcall) { 
    c=a+b
    d=a-b
  
   var result= fcall(c,d)
   return result;


}

result=callback(5,8,function(a,b){
    return a+b;
})
console.log(result)

result1=callback(5,3,function(a,b){
    return a*b;
})
console.log(result1)
=======
function callback1(a,b) { 
    c=a+b
    d=a-b
    return c+d
}
console.log(v=callback1(5,8  ))
function sum(a,b){
    return a+b;
}
function callback2(a,b) { 
    c=a+b
    d=a-b
    result=sum(c,d);
    return result;
}
// var say=callback2;
//  
console.log(callback2(3,4))

function callback(a,b,fcall) { 
    c=a+b
    d=a-b
  
   var result= fcall(c,d)
   return result;


}

result=callback(5,8,function(a,b){
    return a+b;
})
console.log(result)
>>>>>>> f88df60fa5048df48f9a0fc9e4393759798568e7
