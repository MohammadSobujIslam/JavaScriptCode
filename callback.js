function ballback(a,b,cbf){
    var c=a+b;
    var d=c-d;
    var result=cbf(c,d)
    return result
}

var r=ballback(3,4,function(c,d){
    return c+d;
})
console.log(r)