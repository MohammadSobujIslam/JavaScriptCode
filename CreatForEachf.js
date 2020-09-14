var arr=[1,2,3,4,5,6,7,8,9]
// sum=0
// arr.forEach(function(value,index,arr){
    
//     console.log(value,index,arr)
//     sum+=value

// })
// console.log(sum)

// now implementation in foreach function
// function ForEach(arr){
//     for(var i=0;i<arr.length;i++)
//     {
//         console.log(arr[i]);
//     }
// }
// ForEach(arr)


function ForEach(arr,cb){
    for(var i=0;i<arr.length;i++)
    {
        cb(arr[i],i,arr)
    }
}
sum=0
ForEach(arr,function(value,index,arr){
    sum+=value;
    console.log(value,index,arr)
}) 
console.log(sum)


ForEach(arr,function(value,index,arr){
   arr[index]=value+10
})
console.log(arr)