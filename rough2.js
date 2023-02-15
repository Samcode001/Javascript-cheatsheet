// metacharacters

// let regex=/^h/gi; // ^ carrot means it should satrt with 
// regex=/doing$/i; // $ means String Ends with
// regex=/s.m/i;  // . means anything of only one char can come at that palce 
// regex=/d*g/;  // * it Matches the the string for more than one character than "."
// regex=/do?in?/; // it mean in place of ? these anythin can come
// regex=/s\*m/; // It searches the string for Charater *

// let s="Hello Im s*m How u doid";

// let result=regex.exec(s);
// console.log(result);


// character Sets ------------------------------------------------------------

// let regex=/^sam/gi;
// regex=/s[^A-Z]m/; //[^] Carrot inside Bracket
// regex=/s[a-z][^0-9]m/;; // It can matched with whitespace also
// //
// // quantifiers
// regex=/sa{2}m/; // It means a can come two times
// regex=/Go{2}d/;

// // Grouping
// regex=/(sa){2}([0-9]dt){2}/;

// let s="sasa1dt2dt is Good boy";

// console.log(regex.exec(s));
// if(s.match(regex))
// console.log("Matched")
// else
// console.log("Not Matched");


// Shorthand Cahracter -------------------------------------------------------

// let regex=/\wam/; // \w mean word char can come but only one char
// regex=/\w+od/;  // for more than one character
// regex=/\Wis/; // for Alphanumeric
// regex=/\dod/; // \d means digit
// regex=/\d+od/; //\d+ more digit
// regex=/\Dod/; //  for alphabets and alphanumeric
// regex=/\sis/; //for Space  , for \s+ and \S as above property

// let s="sam is good boy";

// console.log(regex.exec(s));
// if(s.match(regex))
// console.log("Matched")
// else
// console.log('Not Matched');

// Iterators -----------------------------------------------

// function iteratorFunc(value) {
//     let index = 0;
//     return {
//         next: function () {

//             if (index < value.length) {
//                 return {
//                     data: value[index++],
//                     done: false
//                 }
//             }
//             else {
//                 return {
//                     data: null,
//                     done: true
//                 }
//             }

//         }
//     }
// }

// let myArray=["Peda","rasgulla","chena","halwa"];
// let data=iteratorFunc(myArray);
// console.log(data.next());
// console.log(data.next().data);
// console.log(data.next().data);
// console.log(data.next().data);
// console.log(data.next().data);


// Generators-------------------------------------------------

// function* nextGen(){
//     let i=1;
//     // yield 1;
//     // yield 2;
//     // yield 3;
//     // yield 4;
//     while(i){
//         yield i++;
//         // yield [i++]; // Prints the continuos value in form of Array
//     }
// }

// let data=nextGen();
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);


// For-In For-Of loops------------------------------------

// let myObj={
//       name:"Sam",
//       id:2003,
//       work:'programmer'
// }

// for(key in myObj){
//     console.log(myObj[key]);
// }

// let myArray=[1,2,34,"hello "];
// for(let key in myArray)
// {
//     console.log(key,":",myArray[key]);
// }
// for(value of myArray)
// console.log(value);


// MAP------------------------------------------

// let myMap=new Map();
// console.log(myMap)


// const key1="str",key2={},key3=function j(){};

// myMap.set(key1,"Hello this is the string for Key1")
// myMap.set(key2,'Name:"Hiamnshu",id:990, work:"Programmer"');
// myMap.set(key3,`console.log("Hello This is a Function")`)

// let data=myMap;
// // console.log(data);
// for(let [key,value] of myMap)
// // console.log(key,value);

// Array.from(myMap).forEach((element,index) => {
//     // console.log(index,":",element);
// });
// console.log(myMap.key2);
// myMap.forEach((value,key)=>{
//     console.log(key,value);
// })


//  Set-------------------------------------------------------------

// let mySet=new Set();
// console.log(mySet);

// mySet.add("Hello");
// mySet.add("this");
// mySet.add([1,4,32,3]);
// mySet.add("this"); // This will be Neglected bacause never takes repeated values
// mySet.add({ 
//             Name:"Sam",
//             id:2001,
//             work:"Fullstack Develepor"
// });

// const a=mySet;
// console.log(mySet);

// let result=mySet.has("this");
// console.log(result);

// for(let value of mySet){
//     // console.log(value);
// }

// mySet.forEach((value,index)=>{
//     console.log(value);  // set has no any index
// })

// // for Deleting the element from set
// mySet.delete("Hello");
// console.log(mySet);


// Symbol ---------------------------------------------

// let sym=Symbol();
// let sym2=Symbol();
// console.log(sym,sym2);
// console.log(sym === sym2); // Symbol is always unique


// const k1=Symbol();
// const k2=Symbol()
// let myObj={Name:"kalka Nath"};
// myObj[k1]="Sam";
// myObj[k2]=[2,4,1,4,6,[2,3,6,7],"This is mixed Array"];

// console.log(myObj[k1]);
// console.log(myObj[k2]);

// for(let key in myObj){
//     console.log(myObj[key]); // Symbol Never Printed In for Loop 
// }


// Destructuring ------------------------------------------------


// let [a1,b2]=[2,5];
// console.log(a1,b2);
// let [a,b,c,...d]=[1,2,3,4,3,2,1,3,4,5,6,7];
// console.log(a,b,c,d);

// let myObj={
//           Name:"Sam",
//           id:2003,
//           work:"Fullstack developer"
// }
// let {Name,id,work}=myObj;
// console.log(Name,id,work);

