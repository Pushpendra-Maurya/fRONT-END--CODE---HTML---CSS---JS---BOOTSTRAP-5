// not primitive dat atype 

// empty error 

var arr = [];

console.log(arr, typeof (arr))




// class method 

var arr = new Array();

console.log(arr, typeof (arr))






var arr1 = new Array()
console.log(arr1, typeof (arr1))

var arr3 = new Array(1, 2, 3, 4, 5)
console.log(arr3, typeof (arr3))


// 1- unshift method  -

arr3.unshift(55)
console.log(arr3)


// 2 - push method add element in ending positon 

arr3.push(98)
console.log(arr3)



arr3.splice(1, 2, 0);
console.log(arr3)




// how to acces data 

console.log(arr3[5]);



// how to modified element 

arr3[2] = 1000

console.log(arr3)
