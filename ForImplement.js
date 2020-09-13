var arr=[1,2,3,4,5,6]
var re=arr.forEach(function(element,index,arr){
    console.log(element,index)
     console.table(arr)
})
// console.log(re)




function foreach(arr,cbf){
    for(var i=0;i<arr.length;i++){
        // console.log(arr[i],i,arr)
        cbf(arr[i],i,arr)


    }
  

}
foreach(arr,function(value,index,arr){
    console.log(value,index,arr)
});
foreach(arr,function(v,i,ar){
    arr[i]=v+5;
})
console.log(arr)
foreach(arr,function(v,i,ar){
    arr[i]=v-5;
})
console.log(arr)


