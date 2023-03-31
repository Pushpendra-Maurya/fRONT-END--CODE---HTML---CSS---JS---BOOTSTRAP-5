var obj = {};
console.log(obj)




// 1- by property Name 

obj ['fname'] = 'Rahul'

console.log(obj)



// 2- by dot property 

obj.lname = 'maurya';
console.log(obj)



// 3- by assign built in method take 2 argument 1- target and 2- source 
// basically create new var store there then call there 

var newobj = Object.assign(obj, {'age':25})
console.log(newobj)



// delete in object 


delete obj.age;
console.log(obj)


delete obj['lname']
console.log(obj)