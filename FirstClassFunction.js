console.log("\nI am start Fistclass functions\n")
// Function can be store a variable;
function sayname(name){
    return "Hello"+" "+name;
}
var Hello=sayname;
var print=Hello("sobuj")
console.log(print)
console.log(Hello("sobuj"))
another=Hello;
console.log(another("I am sobuj"))
// function can be store an array;

var arr=[12,2,453,5,6,'javasript',sayname]
console.log(arr)
arr.push(2,'sobuj',another)
console.log(arr)
// function can be an object

var ovj={num:13,
    name:"Razib hasan",
    fun:sayname,
    sayname:another,
    aray:arr,
    print:function(){
        console.log("hi correct function "+this.name)
    }
}
console.log(ovj)
 var ar=ovj.print();
 //console.log(ar)
 // self intreduce function
 var self=20+(function(){
     return 100;
 }())
 console.log(self)
 // Higher Order function

 function squire(b){
     
     return function(p){
        var r=1;
         for(var i=0;i<p;i++){
             r=r*b
         }
         return r;

     }
    
 }
 var va=squire(2)(6);
 console.log(va)


 function pow(b){
     
    return function(p){
       var r=1;
        for(var i=0;i<b;i++){
            r*=p;
        }
        return r;

    }
   
}
var ml=pow(2)(5);
console.log(ml)
console.log("chapter close in first class function")
 

