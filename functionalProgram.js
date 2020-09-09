/*
console.log("Hello Well come to functional program") 

console.log('Two number sum = '+(3+5));
console.log('Two number sum = '+(34+5));
*/

// First Class Function

function sayname(name)
{
    return 'Hello,'+name;
}

var hello=sayname;
vv=sayname("Mohammad")
console.log(vv)
console.log(hello)
console.log(hello('sobuj'))
var and=hello;
vr=and("hi mohammad sobuj islam")
console.log(vr)
fn=sayname("hi razib hasan")
console.log(fn)

//array push in function


var arr=[2,4,4,7,9,hello]
arr.push(sayname)
console.log(arr)

var person={
    name:"mohammad sobuj",
    fun:sayname,
    code:"javascript",
    print:function(){
        console.log('function can be store in object')
    }
}
console.log(person)
// self inbroking   function
var sum=20+( function(){return 100})();
console.log(sum )

// argument pass in function to function
function wow(name,fun){
   return fun(name);

}
var result=wow("sobuj",sayname)
console.log(result)
// higher order function
function squire(b){
    return function(p){
        var result=1;
        for(var i=0;i<p;i++)
        {
            result*=b;
        }
        return result;
    }
}
var base=squire(5)
var pp=base(4)
console.log(base)
console.log(pp)
var basepow=squire(4)(3)
console.log(basepow)
