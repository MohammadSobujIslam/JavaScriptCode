// Now I am study in Scope
// what is scope 
// javascript has global scope and function scope
var st='Mohammad Sobuj islam\n'// Global Scope
if(true){
    //var st=99
    if(true){
       // var st=10699
        console.log('print value is: '+st);
    }
    //console.log(st)
}

//console.log(st)
// function scope 
function x(){
    st=50
    function y(){
        st=000
        function z(){

           var st=99
            console.log('javascript language is '+st+" % strong\n")

        }

        console.log(st)
        z();

    }
    console.log(st)
    y();
}
x();

//console.log(x())

function numberTest(n){
    function a(){
        return n%4==0
    }
    function b(){
        return n%5==0
    }
    if (a() && b()){
        console.log(n+' divisible by both number of 4 and 5')
    }
    else{
        console.log("not divided");
    }
}

numberTest(10)
numberTest(20)
numberTest(100)
// finish scope  


