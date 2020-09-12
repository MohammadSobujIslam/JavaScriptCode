function add(a,b){
    return a+b;
}
function manipulate(a,b,func){
    var c=a+b;
    var d=a-b;
  
    return  function (a,b){
        var m=func(a,b);
        return c*d*m
    }
}

 var b=manipulate(4,6,add)
 console.log(b(3,6))
 var bb=manipulate(5,6,function(c,f){
     return c-f
 })(3,5)
 console.log(bb)
 console.log(manipulate(3,7,add)(4,7)) 