function Callback(a,b,cbf){
    var c=a+b;//7
    var d=a-b;//-1
    var result=cbf(c,d)
    return result
}

var r=Callback(3,4,function(e,f){
    return e+f;
})
console.log(r)
 function sub(f,g){
   return f-g;
 }
 rr=Callback(4,5,sub)
 console.log(rr)
// // same work using in higher order function

 function higer(a,b){
    var c=a+b;
    var d=a-b;
     return function(){ 
         return c-d;
     }

 }
 var h=higer(4,5)();
 var hh=higer(6,7)
 console.log(h)
 console.log(hh())


// // callback function again here;
function Callb(a,b,cbf){   
      var c=a+b;
       var d=c-b;    
       var result=cbf(c,d)
     return result +(function(){
         return a*b;
     }())

    }
    console.log( g=Callb(3,4,sub))

    // call abar
    function Callm(a,b,cbf){   
        var c=a+b;
         var d=a-b;    
         var result=cbf(c,d)
         return console.log('multiple = '+result)
      
  
      }
      function multi(a,s){
          return a*s;
      }
      Callm(2,3,multi)


