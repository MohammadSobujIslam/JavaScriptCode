<<<<<<< HEAD

var n1=4;
var n2=6
var sum=n1+n2
console.log(sum)


var n3=4;
var n4=63
var sum1=n3+n4
console.log(sum1)
// sumation ar kajgula varvar kora onek time loss
// agula ke reduce korve function

function add(n1,n2){
    var sum=0
    sum=n1+n2;
    console.log('two numbder sum = '+sum)
}

add(3,4);
add(46,-54)
// function addAny(...n){
//     var sum=0
//     sum+=n;
//     console.log('numbder sum = '+sum)
// }
// addAny(3,4,6)




function sub(n1,n2){
    var sum=0
    sum=n1-n2;
    console.log('two numbder sub = '+sum)
}

sub(35,5)
sub(45,-54)
var arr=[0,1,2,3,4,5,6,7,8,9]
var arr1=[1,3,5,7,9]
//var arr2=[2,4,6,8]
function arraysum(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log('array sum = '+sum)
}
arraysum(arr)
arraysum(arr1)

function arraysumation(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){

            sum+=arr[i];

        }
        
    }
    console.log('array sum = '+sum)
}
arraysumation(arr)
arraysumation(arr,35,45)

// function test(a,b,c,d){
//     console.log(arguments)
//     console.log(JSON.stringify(arguments))
// }
// test()

// function test1(a,b,c,d){
//     //console.log(arguments)
//     //console.log(JSON.stringify(arguments))

//     var sum=0;
//     for(var i=0;i<arguments.length;i++)
//     {
//         sum+=arguments[i];
//     }
//     console.log(sum)
// }
// test1(1,3,4,5,6,7)

// function test2(){
//     //console.log(arguments)
//     //console.log(JSON.stringify(arguments))

//     var sum=0;
//     for(var i=0;i<arguments.length;i++)
//     {
//         sum+=arguments[i];
//     }
//     console.log(sum)
// }
// test2(1,3,4,5,6,7,5,5)

function testall(){
    //console.log(arguments)
    //console.log(JSON.stringify(arguments))

    var sum=0;
    for(var i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    console.log(sum)
}

var a=testall(1,3,4,5,6,7,5,5)
console.log(a)//output show undefined because testall function no return


// function expression
// var fun=function namr(){
//     return console.log('function expression')
// }
// // console.log(fun())
// console.log(fun())

var fun=function (name){
    console.log((name))
    console.log('function expression')
    
}
// console.log(fun())
fun('sovuj');
// Inner function used in below here;
function mynam(name){
    function another(){
        console.log(name+' this is your name')

        function again(n,n2){
            console.log(n+n2)
        }
        again(3,5)
    }
    another();
   
}
mynam('sobuj')


function nam(santance,name){
    function Getfirstname(){

        if(name){
            return name.split(' ')[1]
        }
        else {
            return ' '
        }
    }
    var fullname=santance+' '+ Getfirstname();
    console.log(fullname)
}

nam('study now full mode','mohammad sobuj islam')
nam('hello javascript ',)









=======

var n1=4;
var n2=6
var sum=n1+n2
console.log(sum)


var n3=4;
var n4=63
var sum1=n3+n4
console.log(sum1)
// sumation ar kajgula varvar kora onek time loss
// agula ke reduce korve function

function add(n1,n2){
    var sum=0
    sum=n1+n2;
    console.log('two numbder sum = '+sum)
}

add(3,4);
add(46,-54)
// function addAny(...n){
//     var sum=0
//     sum+=n;
//     console.log('numbder sum = '+sum)
// }
// addAny(3,4,6)




function sub(n1,n2){
    var sum=0
    sum=n1-n2;
    console.log('two numbder sub = '+sum)
}

sub(35,5)
sub(45,-54)
var arr=[0,1,2,3,4,5,6,7,8,9]
var arr1=[1,3,5,7,9]
//var arr2=[2,4,6,8]
function arraysum(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log('array sum = '+sum)
}
arraysum(arr)
arraysum(arr1)

function arraysumation(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){

            sum+=arr[i];

        }
        
    }
    console.log('array sum = '+sum)
}
arraysumation(arr)
arraysumation(arr,35,45)

// function test(a,b,c,d){
//     console.log(arguments)
//     console.log(JSON.stringify(arguments))
// }
// test()

// function test1(a,b,c,d){
//     //console.log(arguments)
//     //console.log(JSON.stringify(arguments))

//     var sum=0;
//     for(var i=0;i<arguments.length;i++)
//     {
//         sum+=arguments[i];
//     }
//     console.log(sum)
// }
// test1(1,3,4,5,6,7)

// function test2(){
//     //console.log(arguments)
//     //console.log(JSON.stringify(arguments))

//     var sum=0;
//     for(var i=0;i<arguments.length;i++)
//     {
//         sum+=arguments[i];
//     }
//     console.log(sum)
// }
// test2(1,3,4,5,6,7,5,5)

function testall(){
    //console.log(arguments)
    //console.log(JSON.stringify(arguments))

    var sum=0;
    for(var i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    console.log(sum)
}

var a=testall(1,3,4,5,6,7,5,5)
console.log(a)//output show undefined because testall function no return


// function expression
// var fun=function namr(){
//     return console.log('function expression')
// }
// // console.log(fun())
// console.log(fun())

var fun=function (name){
    console.log((name))
    console.log('function expression')
    
}
// console.log(fun())
fun('sovuj');
// Inner function used in below here;
function mynam(name){
    function another(){
        console.log(name+' this is your name')

        function again(n,n2){
            console.log(n+n2)
        }
        again(3,5)
    }
    another();
   
}
mynam('sobuj')


function nam(santance,name){
    function Getfirstname(){

        if(name){
            return name.split(' ')[1]
        }
        else {
            return ' '
        }
    }
    var fullname=santance+' '+ Getfirstname();
    console.log(fullname)
}

nam('study now full mode','mohammad sobuj islam')
nam('hello javascript ',)









>>>>>>> f88df60fa5048df48f9a0fc9e4393759798568e7
