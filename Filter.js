var arr=[1,2,3,4,5,6,7,8,9,22,29,30]
// var fil=arr.filter(function(value){
//     // if(value%2==0){
//     //     console.log(value)
//     // }
//     // else{
//     //     console.log("error code")
//     // }
//     return value%3==0;


// })
// console.log(fil)

// filter function implementation

function filter(arr,cbf){
    var fil=[]
    for(var i=0;i<arr.length;i++)
    {
        if(cbf(arr[i],i,arr)){

            fil.push(arr[i])
        }
        

    }
    
    return fil;

}
var ft=filter(arr,function(value){
  
//    return vv;
        // return  value%3==0
        return (value%2==0) 
            
        
    
})
console.log(ft)
var ft1=filter(arr,function(value){
    return value>5 && value<20
})
console.log(ft1)

var ft2=filter(arr,function(value){
    return (value%3==0)&& (value>5 && value<20)
})
console.log(ft2)

