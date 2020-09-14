function outer(){
    function inner()
    {
        console.log("I am Inner function haha")
    }
    console.log("I am outer function haha")
    inner();

}

var out=outer();

function calculate(a,b){
    function sum(){
         console.log("sum two number = "+(a+b))
    }
    function sub(){
        console.log("sub two number = "+(a-b))
    }
    function mul(){
        console.log("multiplication two number = "+(a*b))
    }
    function div(){
        console.log("division two number = "+(a/b))
    }
    sum();
    sub();
    mul();
    div();

}
var result=calculate(10,5)

//return statement
function fullname(firstname,lastname,gender){
    var output;
    if(gender==="male"){
        output="Mr."+firstname+lastname;
    }
    else if(gender==="female"){
        output="Ms."+firstname+lastname;
    }else{
        output="no match your gender"
    }
    return output;
}

var rtn=fullname('Md '," sobuj","male")
console.log(rtn)

function exam(){
    return {
        name:'Md sobuj',
        skill:['c language','java','javascript'],
        print:function(){
            console.log(this.name,this.skill);
        }
    }
}
var obj=exam();
console.log(obj)
obj.print();

// Inner function pactice;
function firstout(name){
    function firstin()
    {
        console.log("hello what is your name "+name)
        console.log("it is appropiate inner function")
    }
    firstin();
    console.log("this is out function")
}
var inner=firstout("sobuj mia")

