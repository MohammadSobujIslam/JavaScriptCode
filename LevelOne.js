console.log("\nWell Come to javaScript")
console.log("\nLevel One ")
// comments likhe  double slash diye sigle Line comments;
/* 
Multiline comments likhe first a slash star/asterisk and last a asterisk slash diye sesh korte hoy;

*/
// Variable declaration rule;
/*
let varr;
varr=null;

let varir="sobuj islam";
let ss
ss="Coder boy Razib hasan"
const v=35;

console.log(varr)
console.log(v)
console.log(ss)
console.log(varir);
 i=0;
for(i;i<20;i++)
{
    console.log(i)
}
var nm=35
nm1=3.3
nm2=Number("10923")
nm3='12'
nm4="23sf"
console.log(nm)
console.log(nm1)
console.log(nm2)
console.log(nm3*5)
console.log(nm4*2)
*/
// Type conversion Part
/*
var str='30'
console.log(str*3)
console.log(str-3)
console.log(null)
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(4))
console.log(Boolean(null))
console.log(Boolean(Infinity))
var a=true
console.log(a.toString())
x=45
console.log(x.toString())
*/
//Hexadecimal or octal number
/*
hx=0xf
om=015
console.log(hx)
console.log(om)
b=2
a=9
console.log(a!== b)
console.log(typeof 20)
console.log(typeof '20')
*/
// Math builtin function
/*
 n=3
 nm=4.3
 console.log(n)
 console.log(nm)
 console.log(Math.E)
 console.log(Math.PI)
 console.log(Math.floor(nm))
 console.log(Math.ceil(nm))
 console.log(Math.pow(2,3))
 console.log(Math.sqrt(85))
 console.log(Math.max(4,3))
 console.log(Math.min(20,523))
 console.log(Math.random())
 console.log(Math.round(nm))
 console.log(Math.round(Math.random()*100+50))
 //date=new Date()
 console.log(date.toDateString())
 console.log(date.toTimeString())
 console.log(date.toLocaleString())
 console.log(date.getFullYear())
 console.log(date.getMonth())
 console.log(date.getDate())
 console.log(date.getHours())
 console.log(date.getMinutes())
 console.log(date.getSeconds())
*/

//Now I am explain switch statement
/*
var ar=0
switch(ar){
    case 3:
        console.log("good position")
        break;
        case 2:
            console.log("better position")
            break;
            case 1:
                console.log("best position")
                break;
                default:
                    console.log("Your input number is wrong")
}
*/
// Ternary operator
b=45
r=b%2==0?'even':'odd'
console.log(r)
str=""
fullname=str || "sobuj islam"
console.log(fullname)
str1=false
str1 && console.log("Your Code is Right")
//Do while loop
isruning=1
do{
    console.log("do while loop is curret")
    isruning ++
}while(isruning<10)

var n=5
for(var i=1; i<=n;i++)
{
    var t=''
    for(var k=1;k<=5;k++)
    {
        t=t+'*'+'  '
        
        
    }
 
    console.log(" "+t +" ") 
  
}

