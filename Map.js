var arr=[1,3,2,4,5]
// foreach and map function different is map do the return are foreach no raturn

// var arrsqr=arr.map(function(v){
  
//     // return v*v;
//     return Math.round(Math.random()*20+1)


// })
// console.log(arrsqr)

// Implementation map function

function Imap(arr,cbf ){
    var newarr=[]

    for(var i=0;i<arr.length;i++){
        var temp=cbf(arr[i],i,arr)
        newarr.push(temp)
    } 
    return newarr;

}

var imp=Imap(arr,function(value,i,arr){
    return value+value;
})
console.log(imp)

var imp1=Imap(arr,function(value){
    return value*value*value;
})
console.log(imp1)





