// Object explain and declaration

var obj={}
console.log(obj)
obj.name='sobuj islam'
obj.age=38
obj.education='university student'
obj.gender='male'
obj.address='dhaka shantibag'
obj.print=function (params) {
  console.log('Your name is '+this.name)  
}
console.log(obj)
console.log(typeof obj)
var obj1=Object()
console.log(obj1)
obj1.name='razib'
console.log(obj1)
var obj2=new Object()
console.log(obj2)
obj2.name='Akil riyan prantho'
obj2.age=24
obj2.work='student'
console.log(obj2)
// object has two type of notation
// dot and array notation
console.log(obj.name)
console.log(obj2['name'])
var show='name'
console.log(obj2[show])
obj2.hi='ciss'
console.log(obj2)
delete obj2.hi
console.log(obj2)
obj2.age=null
console.log(obj2)
