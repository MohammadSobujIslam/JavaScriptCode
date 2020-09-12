var arr=[2,5.5,4,42,7,8,'sobuj','jihad']//literal array declaration
console.log(arr)
arr[12]=22;

console.log(arr.length)
arr.push(33)
console.log(arr)
var arar=Array(2,4,41,5,6) // constructor array declaration
console.log(arar)
// javascript a array third bracket used
console.log('array traverse')
arr.forEach(function(a,b,c){
    console.log(a)
})
// nultidimentional array

ar=[
    [81,57,42,97],
    [44,90,85,78],
    [90,85,98,92]
]
console.log(ar)
for(var i=0;i<ar.length;i++){
     console.log(ar[i])
}

for(var i=0;i<ar.length;i++){
    for(var j=0;j<ar[i].length;j++){
        console.log('Element '+i+' = '+ar[i][j])
    }
}

console.log(arr)
var arr1=[1,2,4,5,6,6,7,8]
console.log(arr1)
for(var i=0;i<(arr1.length/2);i++){
    var temp=arr1[i]
    arr1[i]=arr1[arr1.length-1-i]
    arr1[arr1.length-1-i]=temp
}
console.log(arr1)
console.log(arr1.join('v'))
