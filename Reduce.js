var arr=[1,3,5,7,9,11,14,17,26]
// var sum=arr.reduce(function(prev,curr){
//     return prev+curr;

// },)
// console.log(sum)
// var max=arr.reduce(function(pv,cv){
//     return Math.max(pv,cv)

// })
// console.log(max)

// var min=arr.reduce(function(pv,cv){
//     return Math.min(pv,cv)

// })
// console.log(min)
function MyReduce(arr,cf,acc){
    for(var i=0;i<arr.length;i++){
        acc=cf(acc,arr[i])
    }
    return acc
}

var max1=MyReduce(arr,function(pv,cv){
    return Math.max(pv,cv)
},arr[0])
console.log(max1 )
var min1=MyReduce(arr,function(pv,cv){
    return Math.min(pv,cv)
},arr[0])
console.log(min1 )

