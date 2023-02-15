let marks=[23,45,34,24,68,79,89];
const fruits=['Orange','lolly'];
const mixed=[1,2,3,'harry','sam',[1,6,2,45,2]];

// console.log(marks);
// console.log(fruits);
// console.log(mixed);
const arr=new Array(23,45,'Orange');
const arr1=[23,45,'Orange'];
console.log(arr1);
console.log(arr);

console.log(arr.length);
console.log(Array.isArray(arr));//checks weather is array or not

let arrelement=arr[2];
let arrelement2=mixed[5];
console.log(arrelement)
console.log(arrelement2)

arr[0]='Sam';
console.log(arr);

let value=marks.indexOf(79);
console.log(value);

// Mutating or Modifying Arrays
marks.push(3533);
marks.unshift(1009);//push in start
// marks.pop();
// marks.shift();
console.log(marks);
// marks.splice(1,6);// Deleted the values from index to index
marks.reverse();
console.log(marks);

let marks2=[1,4,2,7,5];
marks=marks.concat(marks2);
console.log(marks);

let myobj={
           'first_name' : 'Sam',
           channel: "Sam's Code",
           isActive: true,
           marks:[1,3,2,4,3]

}
console.log(myobj);
// console.log(myobj['channel']);
console.log(myobj.channel);

