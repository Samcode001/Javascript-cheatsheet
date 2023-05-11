// let st = {
//       Name: "sama",
//       Age: 20,
//       Marks: 344
// };
// console.log(st);
// let ste=[20,34 ,"Sam"];
// console.log(ste);

// // let Nmae;
// Name='sam';
// number=878;
// console.log(typeof(number));
// console.log(typeof(Name));


// typeconversion

// let Name=Boolean("sam");
// console.log(Name+typeof Name)
// let set=Number(true);
// console.log(set,typeof set);
// 2
// let str ={
//       1: "Number",
//       2: "string",
//       3: "Boolean",
//       4: "Array",
//       5: "Object"
// };
// console.log(str);
// var a = prompt("Give the Selection");
// console.log(a);
// switch (a) {
//       case 1: Number(a);
//             console.log(a, typeof a);
//             break;
//       case 2: String(a);
//             console.log(a, typeof a);
//             break;
//       case 3: Boolean(a);
//             console.log(a, typeof a);
//             break;
//       case 4: Array(a);
//             console.log(a, typeof a);
//             break;
//       case 5: Object(a);
//             console.log(a, typeof a);
//             break;
//       default: console.log("wrong selection");
//             break;
// }

// ----------**** String Properties*********-----------------

// let str="This is my name I am himanshu jaiswal thank you for calling dell";
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str[10]);
// console.log(str.indexOf("t"));
// console.log(str.lastIndexOf("t"))
// console.log(str.charAt(38))
// console.log(str.includes("dell"))

// let Name="Sam";
// let greeting="Hello";
// let myhtml=`this is Name ${Name} and Greeting ${greeting}`;
// document.body.innerHTML=myhtml;


// -----------------********  Arrays & Objects *************-----------------

// let a=3;
// let arr=[2,56,34,[2,3,3,2,4,9],"Sam","Namita"];
// let ar=new Array(2,4,56,67);
// console.log(arr);
// console.log(ar);
// console.log(arr.length);
// console.log(Array.isArray(arr))//Check weather is Array or not

// let elem=arr[5];
// console.log(elem);

// arr[0]="Himanshu";
// // console.log(arr);
// console.log(arr.indexOf("Namita"))
// //NOw Mutating it & Manipulating

// arr.push(24);
// arr.pop();
// arr.unshift(256);
// arr.shift();
// arr.reverse();
// // arr.splice(2,3);   //Deletes from (index,no of elements from given index)
// console.log(arr);

// let marks=[2,3,4,5];
// arr=arr.concat(marks); //Concating two arrays
// console.log(arr);

// let Obj={
//           "Name":"Sam",
//           Age:22,
//           College:"IET"
// }
// console.log(Obj);
// console.log(Obj.College);
// console.log(Obj.Name);
// console.log(Obj['College']);
// console.log(Obj['Name']);


// -------------------********if Else & Swicth*********-------------------

// let a=2;
// if(a===23)          // (===) check for equality in datatype also
// console.log("Yes");
// else
// console.log("no");

// switch(a){
//       case 1: console.log(1);
//                  break;
//       case 2:  console.log("2");
//                   break;
//       default: console.log("default");
//                   break;
// }


// --------------------******** For & While Loop********-----------------

// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//       let element=arr[i];
//        element=arr[i];
// //      console.log(element);
// }

// // arr.forEach(function(element,index,array){
// //       console.log(element,index,array);
// // })

// arr.forEach(function(array,element,index){
//       console.log(index,element);
// })


// let myObj={
//       Name:"Sam",
//       Age:20,
//       worth:0

// }
// // for(let key in myObj)  //Objects are derive by for loop like this
// // {
// //       console.log(`The value of object key ${key} is ${myObj[key]}`);
// //       // console.log(myObj[key]);
// // }

// for(let key in myObj)
// {
//       console.log( `The key value of Objetc ${key} is ${myObj[key]}`);
// }




// --------------*************** Functions ********-----------------------

// function call(Name){
//       console.log("Hello");
//       return `${Name}`;   //Default return type undefined
// }

// console.log(call("Sam"));

// let mygreet=function(Name,greet){
//       return `Hello ${Name} ${greet}`;
// }

// // console.log(mygreet("Sam","Good Morning"));


// let Hello=function(element){
//       //  console.log(element)
// }
// let arr=[1,2,3,4,5,[23,56],"FILLed"];
// console.log(Hello(arr));

// arr=["fur","HTMLSourceElement","dur"];
// arr.forEach(function(array,element,index){
//       // console.log(element,index,array);
// })

// let myObj={
//       Name:"sam",
//       Age:20,
//       Work:"None",
//       game:function(Name){
//             return `want to play a game`;
//       }
// }
// console.log(myObj);
// console.log(myObj.game());
// for(let key in myObj){
//       console.log(key);
//       console.log(myObj[key]);
// }



// -----------------********* Understanding Dome *********------------------
// let b=document;
// b=document.all;
// // b=document.body;
// // b=document.forms[0];
// // // b=document.links[0];
// // Array.from(b).forEach(function(element,index,array){
// //       console.log(element,index,array);
// // })
// console.log(b);


// ----------------******* HTML Element Selector ******--------------------


//       single element Selectors
// let element=document.getElementById("myfirst");
// element=element.className;
// // Array.from(element).forEach(function(element){
// //       console.log(element);
// // })
// // element=element.childNodes;
// element=element.parentNode;
// element.style.color="maroon";
// // element.innerText="Hello";
// element.innerHTML=`<h1>Hello</h1>`;
// console.log(element);

// Here comes Query Selector

// let sel=document.querySelector("#myfirst");
// sel=document.querySelector(".childul");
// // sel=document.querySelector("div")
// sel.style.color="green";
// console.log(sel);

//   MutliElement Selectors


// let element=document.getElementsByClassName("container"); // gives all the element of class
// let select=document.getElementsByClassName("child");
// console.log(element);
// console.log(select);
// Array.from(select).forEach(function(element){
//       console.log(element);
// })

// console.log(element[0].getElementsByClassName("child")); // For Selecting first class



// -----------------******** Children,parent&Traversing ******---------------------


// let element=document.querySelector('.container');
// // console.log(element.childNodes);
// // console.log(element.children);

// let sel=document.querySelector(".container");
// // sel=sel.childNodes[0].nodeName;
// sel=sel.childNodes[1].nodeType;
// // console.log(sel);

// let cont=document.querySelector(".container");
// // cont=cont.children;
// console.log(cont.firstChild);
// console.log(cont.firstElementChild);
// console.log(cont.firstElementChild.parentNode);
// console.log(cont.lastChild);
// console.log(cont.lastElementChild);


// ----------------******** Creating,Removing&Replacing elements***********----------------

// let elem=document.createElement("li");
// elem.className="childul";
// elem.id="Createdid";
// elem.setAttribute("tittle","mytittle");
// elem.innertext="Hello This is Sam";
// elem.innerHTML="<p>Hello</p>";
// console.log(elem);

// let cont=document.querySelector(".this");
// cont.appendChild(elem);
// // console.log(cont);

// let elem2=document.createElement("h2"); // creates any element
// elem2.className="childul";
// elem2.id="id";

// let tnode=document.createTextNode("Hello im Tnode"); // write anything inside the element that u created
// elem2.appendChild(tnode);
// console.log(elem2);
// elem.replaceWith(elem2);  // replaces the element
// console.log(elem);


// --------------*********Events & Events_Object*******--------------------

// document.querySelector(".head").addEventListener("click",function(){
//     console.log("Clicked");
//     let elem=document.querySelector(".head");
//     elem.innerHTML="<h1> Hello</h1>"
// })
// document.querySelector(".no").addEventListener("click",function(e){
//     let variable=e.target;
//     variable=e.target.className;
//     // variable=e.target.id;
//     variable=Array.from(e.target.classList);
//    console.log(variable);
//    console.log(Array.from(e));
// })

// let btn=document.querySelector("#btn");
// console.log(btn)
// btn.addEventListener("click",func1);
// btn.addEventListener("dblclick",func2);
// btn.addEventListener("mousedown",func3);// is fired the moment the mouse button is initially pressed
// btn.addEventListener("mouseenter",func4);
// btn.addEventListener("mouseleave",func5);

// function func1(){
//     console.log("Clicked","func1");
// }
// function func2(){
//     console.log("Double Clicked","func2");
// }
// function func3(){
//     console.log("mouse down","func3");
// }
// function func4(){
//     console.log("Mouse In");
// }
// function func5()
// {
//     console.log("Mouse Out");
// }

// ---------------******** Local & Session Storage ********---------------

// localStorage.setItem("Name","Harry");
// localStorage.setItem("Name2","Sam");
// localStorage.removeItem("Name"); // Clear the particular data that u specify.
// localStorage.clear();        // cLear All the data of the local storage 
// console.log(localStorage.Name2);

// let vr=localStorage.getItem("Name");
//  vr=localStorage.getItem("Name2");
// console.log(vr);

// let arr=["Hello","Good","Morning"];
// localStorage.setItem("sabzi",arr); // This is will set the localstorage as string i.we the array will changed into a string
// console.log(JSON.parse(window.localStorage.sabzi)); // If we retrive this data we simply get the string 
// localStorage.setItem("sabzi2",JSON.stringify(arr)); // In this form we actually set the variable as array
// console.log(JSON.parse(window.localStorage.sabzi2)); // in retriving we actually get the array


// sessionStorage.setItem("Name","sam");
// let vre=sessionStorage.getItem(Name);
// console.log(vre);


// -----------******** Math Object*******---------------------------

// z=Math;
// console.log(z);

// z=Math.max(23,43,67,8);
// z=Math.min(23,43,67,8);
// z=100*Math.random();
// console.log(z);


// ----------******* Date Object*****------------------

// let a=new Date();
// let otherDate=new Date("01-10-2011 03:20:30");  //All Format mm/dd/yy
// //  otherDate=new Date("02/22/1980");
// //  otherDate=new Date("12 june 1277");
// console.log(a);
// console.log(otherDate);

// let d=otherDate.getDate();
//  d=otherDate.getHours();
//  d=otherDate.getMinutes();
//  d=otherDate.getMonth();
//  d=otherDate.getFullYear();
//  d=otherDate.getMilliseconds();
//  d=otherDate.getSeconds();
//  d=otherDate.getTime();// Gives the time from 1970 till now in seconds
//  d=otherDate.getDay();// Sun=0 ,Mon=1 .....
// console.log(d);

// otherDate.setDate(24); // We can Also set above all the functions
// otherDate.setSeconds(24); 
// console.log(otherDate);


// // -------------******** Object Literalas ***********----------------

// // Normal Object
// let car={
//     Name:"kia",
//     topSpeed:140,
//     color: function(colour){
//         return(`Your car color is ${colour}`);
//     },
//     car_details:function(){
//         return(car);
//     }
// };
// console.log(car);

// //  Constructor

// function General(givenName,givenSpeed){
//       this.name1=givenName;
//       this.speed=givenSpeed;
//     console.log(name1,givenSpeed);
//     // this.car=function(){
//     //     return(`${this.name1} is Runnig with Topspeed of ${this.speed}`);
//     // };
//     // this.compare=function(){
//     //     return(`${this.name1} car is slower from ${car2.name1} by ${car2.this.speed-car1.this,speed} `);
//     // };
// };

// car1=new General("Nissan","190");
// car2=new General("Ferrari","390");
// car3=new General("Kia","290");
// console.log(car1,car2,car3);


// -------------******** Object Prototype********-----------------------

// let Obj={
//     Name: "sam",
//     Age:20,
//     work:"None"
// };
// console.log(Obj);

// function Name(givenName,givenAge){  // This Constructor is working as a prototype of object Obj2
//     this.Name=givenName;
//     this.age=givenAge;
// }
// let Obj2=new Name("Hima",20); // Taking the prototype from above constructor
// console.log(Obj2);

// function Game(gameName,givenPrice){
//     this.name=gameName;
//     this.price=givenPrice;
//     this.solitude=function(){
//         return`"The Best game is ${this.name}`;
//     }
// }

// let gameObj=new Game("Contra",300);
// console.log(gameObj);
// console.log(gameObj.solitude());
// let gameObj2= new Game("Nissan",200);
// console.log(gameObj2);

// --------------********* Prototype Inheritance *******---------------

// const proto = {
//     slogan: function () {
//         console.log("This company is best");
//     },
//     feature: function () {
//         return `455 features`
//     },
//     changeName: function (name) {
//         this.name = name;
//         return this.name;
//     }
// }

// //creating Object
// let sam = Object.create(proto);
// sam.name = "Hulk";
// sam.role = "powerful";
// console.log(sam);
// console.log(sam.slogan()); // it retrun undefined beacause nothing is return
// console.log(sam.feature());
// console.log(sam.changeName('shila'),sam);

// //Another method of creating Object
// let lame = Object.create(proto, {
//     name: { value: "Nissan", writable: "true" },
//     role: { value: "programmer" }
// });
// console.log(lame);


// //Making Employee Constructor
// function Employee(name,age,role){
//     this.name=name;
//     this.age=age;
//     this.role=role;
// }

// //Adding Function to Employee constructor prototype
// Employee.prototype.slogan=function(){
//     return`My Company is Best`;
// }

// let Obj1=new Employee("Sam",20,"Programmer");
// console.log(Obj1);

// function Programmer(name,age,role,language){
//     Employee.call(this,name,age,role);
//     this.language=language;
// }

// let harry=new Programmer("sam",21,"Programmer","Javascript");
// console.log(harry);


// --------------********** ES6 Classes & Inheritance **********---------------


// class Employee{
//     constructor(givenName,givenExperience,givenDesignation){ // This is the constructor of ES6 Classes
//         this.name=givenName;
//         this.Experience=givenExperience;
//         this.Designation=givenDesignation;
//     }
//     slogan=function(){
//         return `${this.name}'s company is Best `
//     }
//   static add(a,b){ // static means we can access this function but not inciule in prototype
//       return a+b;
//   }
// }

// // After extends The prototype of progremmer will be Employee
// class Programmer extends Employee{
//     constructor(givenName,givenExperience,givenDesignation,language,github){
//         super(givenName,givenExperience,givenDesignation);//Most Important Thing, It retrive the parameter from employee class
//         this.language=language;
//         this.github=github;
//     }
//     static multiply(a,b)
//     {
//         return a*b;
//     }
// }

// let Obj=new Programmer("Sam",4,"Programmer","javascript",420993); // In this type the prototype will be Employee as well as programmer
// console.log(Obj);
// console.log(Programmer.multiply(2,3)); // We accessed the function but not showing in the prototype
// console.log(Programmer.add(2,3));


// ------------********* CallBack Functions *****-----------------

// let data=[
//     {name:"Sam",Subject:"Java"},
//     {name:"Jogy",Subject:"Python"}
// ];  // two objects in an array
// console.log(data);


// function enrollStudent(student,callback){
//    setTimeout(() => {
//     data.push(student);
//     console.log("Student has been enrolled");
//     callback();
//    }, 1000); 
// }

// let data1={name:"Birju",Subject:"Flutter"};


// let popBtn=document.getElementById("student");
// popBtn.addEventListener('click',popList);
// function popList(){

//     setTimeout(() => {
//        console.log("Clicked PopBtn");
//         let str="";
//         data.forEach(function(element){ // we have to take element by element in for Each
//             str+=`<li>${element.name}</li>`;
//         });
//        document.getElementById('studentList').innerHTML=str;
//     }, 2000);

// }
// enrollStudent(data1,popList); // The Call back function is popList



// ------------******** Promises ********-----------------------------

// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             let error=false;
//             if(error){
//                 console.log("Resolve Called");
//                 resolve("Reslove mssg");
//             }
//             else{
//                 console.log("reject Called");
//                 reject("You can give mssg here");
//             }
//         }, 1000);

//     })
// }

// func1().then(function(mssg){
//     console.log("This is then",mssg)
// }).catch(function(error){
//     console.log("This is catch");
// });


// let students = [
//     { name: "Sam", work: "none" },
//     { name: "Lala", work: "none" },
//     { name: "kikas", work: "none" }
// ]

// function enrollStudent(student) {
//     return new Promise(function(resolve,reject){
//     setTimeout(function () {
//         students.push(student);
//         let error = false;
//         if (error) {
//             resolve();
//         }
//         else {
//             reject("error occured");
//         }
//     }, 1000);
//     }
// )}


// function showList() {
//     let studentList = document.getElementById("studentList");
//     let str="";
//     students.forEach(function (students) {
//         str += `<li>${students.name}</li>`;
//     });
//     studentList.innerHTML = str;
// }

// let newStudent = { name: 'raja', work: "kola" };
// enrollStudent(newStudent).then(showList).catch(function (error) {
//     console.log("Some error occured",error);
// })

// ------------*********** Arrow Functions ***********--------------

// Regular way
// function func1(){
//     console.log("Hello");
// // }
// let func1=function(){
//     console.log("Hello")
// }
// By Arrow Method

// let func1=()=>{           // "function"  <=>  "()=>""
//      console.log("Hello");
// }

// let func1= () => "good Morning";
// let func1= () => ({name: "harry"});

// // let func1= name=> console.log(name);
// let func2= (name,greet)=>name+greet;
// console.log(func2("Sam","Bye"));


// ----------------*********** Fecth Api **********---------------------------


// function getData(){
//      url="Text.txt";
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// }

//for getting the api 
// function getData(){
//      url="https://api.github.com/users";
//     fetch(url).then((response)=>{
//         return response.json(); // JSON gives the data in object form
//     }).then((data)=>{
//         console.log(data);
//     })
// }

// getData();

// // For Post 

// function postData(){
//  url="https://api.instantwebtools.net/v1/passenger";
// data=
//     {
//         "name": "habsndwnw3",
//         "trips": 250,
//         "airline": 5
//     }

// let params={
//             method:'post',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:data
// }
//   fetch(url,params).then(response=> response.json()).then(data=>console.log(data));
// }

// postData();


// ---------------********** Async/Await ********--------------------

// async function func1(){         /// async function return a promise
//     let response=await fetch("https://api.github.com/users");
//     console.log("After 1st Await");
//     let users=await response.json(); //the must  be in JSON form for parse in JSON
//     console.log("Inside Func1");
//     return users;     // returns a promise
// }
// console.log("Before calling func1");
// let a=func1();
// console.log("After Calling func1");
// console.log(a);
// a.then(data=> console.log(data));



// ----------********* Error Handling & Try Catch ***********-----------------


// let a=undefined;
// if(a!=undefined){
//     throw  new Error("Not Undefined")
// }
// else{
//     console.error("undefined");
//     throw new Error("Undefined")
//     // console.log("Ji") //after throw nothing works as like return
// }

// try {
//     sdkmvcadmvdklmv                  // we use try & catch for checking the error of function
//     // console.log("Inside try");
    
// } catch (error) {
//     console.log("Error");
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
// }


// ----------------********* Regular Expression & itse related function **********-----------------


// let reg=/sam/;  // Regular expression literal 
// // let reg=/sam/g;  // g means global which is a flag
// //  let  reg=/sam/i;  // Case insensitive
// // let regex=/sam/gi; // I can declare both icaseInsensitive or global
// console.log(reg);
// console.log(reg.source);

// let s="Hello sam how u doing me too sam";

// // Some of its Function

// // exec()-gives the index of the reg starts after repeating it will again show the next place of reg & return the index
// let result=reg.exec(s);
// console.log(result);
// result=reg.exec(s);   // the times u repeat it it will give the results at different location of ur string
// console.log(result);
// result=reg.exec(s);  //At last it return null if the strings eliminates and it count all given reg
// console.log(result);

// // test() gives us true or false
// result=reg.test(s);
// // console.log(result);

// //match() return an array
// result=s.match(reg);
// // console.log(result);

// //search() returns the index of first match
// result=s.search(reg);
// // console.log(result);

// // replace() replaces the reg to the following strings
// let result2=s.replace(reg,"Harry");        //It repaces the regex element that is present in string with the new given String
// // console.log(result2); 

// -----------********* Meatcharacters in regular expression *********--------------------

// let regex=/^sam/;// "^" its a carrot uses for matching that expression for starting of string
// let regex=/sam$/; // "$" mathes the expression at the end of string
// let regex=/s.m/; // "." uses for empty choice for only one char
// let regex=/s*m/; // "*" uses for empty choice for more than one char
// let regex=/hr?rry?t/; // "?" wriiteen after that char will be optional it will be any char or none
// let regex=/s\*am/; // back slash use for that exact same expression;
// let s="sam";

// let result=regex.exec(s);
// console.log("The string Contains reg at:",result);

// if(regex.test(s)){
//     console.log("String match")
// }
// else{
//     console.log("string not match")
// }


// -------------------************ Charatcer Sets In regular Expression ***********-----------------------


// Character Sets
// let regex=/sam/;
// let regex=/^sam/;
// let regex=/s[^a-z]m/; // [^] inside bracket carrot char must not match  
// let regex=/s[^v-z][^a]am/; // [^] inside bracket carrot char must not match  
// let regex=/s[^v-z][0-9]am/; // [^] inside bracket carrot char must not match  
// let regex=/s[^v-z][0-9]a[mMAa]/; // [^] inside bracket carrot char must not match  


// Quantifiers
// let regex=/sa{2}m/;// Its means a can occur two times
// let regex=/sa{2}m{0,3}/;// Its means a can occur two times & m can 0 to 3 

// Groupings 
// let regex=/(sa){2}([0-9]r){2}/;


// let s="sasa9r4r";

// if(s.match(regex))
// console.log("String Matched");
// else
// console.log("Not Matched");

// ----------------************** Shorthand_Character_classes(Regular_Expression) **********----------------------

// Character classes
// let regex=/\wl9/; // \w Word Character it will take word ,_ & numbers
// let regex=/\w+lo/; // It will return the whole string which is attached with it 
// let regex=/\Wllo/; //  Big W is for Opposite i.e AlphaNumeric
// let regex=/\dllo/;  // \d is for this digit i.e 0-9
// let regex=/\d+ow/;  //Same as above \d+ is for more than one digit
// let regex=/\Dllo/;   // D same as oppsite of digits i.e alphabets & Alphanumeric
// let regex=/\sho/;   // \s Use for whitespaces
// let regex=/\s+ho/;   // \s Use for one or more than one whitespaces
// let regex=/\Sho/;   //  S is for Opposite i.e not whitespaces
// let regex=/how\b/;  // Boundary means afterspace where words boundary is

// Assertions
// let regex=/h(?=o)/; //it means after h it should be o
//  regex=/h(?!o)/;  // It means other than o




// let s="Hello I'm sam how are you!";

// let result=regex.exec(s);
// console.log(result);

// if(s.match(regex)){
//     console.log("Matched");
// }
// else
// console.log("Not Matched");


// --------------*********** Iterators ***********----------------------

// Iterator is a function which is use to traverse through given data and return a value as per iterator protocol

// function iteratorFunc(values){ 
//     let index=0;
//     return{
//          next: function(){ // function iterate throughout the array
//              if(index<values.length){
//              return {
//                value: values[index++],
//                done: false
               
//              }
//             }
//              else{
//                 return { 
//                     value: null,
//                     done: true
//                 }

//              }
//          }
//     }
// }

// const myArray=["chena","peda","rasgulla","halwa"];
// console.log(myArray);
// const data=iteratorFunc(myArray);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);

// --------------*********** Generators ***********----------------------

// function* nextgen(){
//     let i=1;
//     // yield 1;
//     // yield 2;
//     // yield 3;
//     // yield 4;
//     while(i){
//         // yield i++;
//             yield[i++] // gives data in form of array
//         yield (i++).toString(); // Print the value in String
//     }
// }

// let data=nextgen();
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);


// -----------************ For_In & For_of_Loops **********--------------------

// let people=["sam","harry","jogy","birju","dee"];
// console.log(people);

// by Tradiotional for loop

// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     // console.log(element);
// }

// // Iterating Object
// let myObj={
//          Name:"Sam",
//          id:2003,
//          profile:"Fullstack Developer"
// }

// //By traditional for loop
// for (let index = 0; index < Object.keys(myObj).length; index++) {  // Object.keys() returns an array of keys present in that object
//     const element = myObj[Object.keys(myObj)[index]];
//     console.log(element)
    
// }

// // By for-in loop
// for(let key in myObj){
//     console.log(myObj[key]);
// }

// let myString="Hello i'm sam How U doing";
// for(let key in myString){
//     // console.log(myString[key]);
// }

// ********** For of Loop *************

// for(let key of myString){
//     console.log(key);
// }

// for(let name of people){   // For of Loop iterate in Values
//     console.log(name); 
// }
// for(let name in people){  // Basically For in loop iterate in Index
//     console.log(name);
// }
// console.log(people);


// QUIZ
// for (let index = 0; index < myString.length; index++) {
//     const element = myString[index]; 
//     console.log(element);
// }

// ----------------*********** Map ************--------------

// let myMap=new Map();
// // console.log(myMap);

// const key1='str',key2={},key3=function(){ value:"key Value is"}; // What u put in here will be the key of that varaible

// myMap.set(key1,"This is key1");
// myMap.set(key2,"This is key2");
// myMap.set(key3,"This is key3");

// console.log(myMap);
// console.log(myMap.size); // gives the size;
// let myValue=myMap.get(key3);
// console.log(myValue);

// for(let [key,value] of myMap){
//     console.log(key,value);
// }

// myMap.forEach((value,key) => {
//     console.log(key);    
//         console.log(value);
// });

// Array.from(myMap).forEach((value,key)=>{
//     console.log(key);
//     console.log(value);
// })

// ---------------*********** Sets ***********----------------

// let mySet=new Set();
// console.log(mySet);

// mySet.add("this");
// mySet.add("that");
// mySet.add("this"); // It will not Take this because Set never Take Repeated Values
// mySet.add(898);
// mySet.add({Work:"programmer",
//             port:"Chilka",
//             id:2003
// });
// mySet.add([1,2,3,4]);
// console.log(mySet);
// console.log(mySet.size);

// let result=mySet.has("thaaat"); // Gives u true or false 
// console.log(result);

// const mySet2=new Set([1,334,23,"this is me ",{Name:"Hiamnshu",work:"programmer"},[43,'Hello']]);
// console.log(mySet2);

// for(let item of mySet){
//     console.log(item);
// }

// Array.from(mySet).forEach((element)=>{
//     console.log(element);
// })

// // for Deletingfrom Set
// console.log(mySet);
// mySet.delete("that");
// console.log(mySet);


// ------------********** Symbols ***********--------------

// let sym=Symbol();  // Symbol is a primitive like int ,char,unefined etc. which is use for represent a uniqe value
// let sym=Symbol("Identifer"); // we can put an identifier in it 
// let sym2=Symbol("Identifier");
// console.log(sym);
// console.log(sym2);  

// console.log(sym === sym2); // both are different here because Symbol represent a Unique value 
// console.log(undefined === undefined)  // true 
// console.log(null === null)        // true  But the The Symbols Different beacuse its provide unique primitive value

// const k1=Symbol();
// const k2=Symbol();

// let myObj={Name:'Kalka Nath'};
// myObj[k1]="Harry"; // It setting the key as Symbol
// myObj[k2]="Sam";
// console.log(myObj);


// console.log(myObj[k1]);
// console.log(myObj[k2]);
// console.log(myObj.k1);  // This is wrong method

// for(key in myObj){  // The Symbols is neglected in the for In loop 
//     console.log(myObj[key]);
// }

// -------------******* Destructuring *************----------------------


// let [a,b,c]=[1,2,3];
// console.log(a,b,c);

// let [a,b,c,...d]=[1,2,3,4,4,5,6,6,7,7,7]; // U put ... before variable its become array and take all the values
// console.log(a,b,c,d);

// let laptop={
//     name:"Dell Exynos",
//     model:5415,
//     processor:"Ryzen5",
//     show: function(){
//         console.log("hello This is Dell Exynos 5415");
//     }
// }
// // console.log(laptop);

// const {name,model,processor,show}=laptop;
// console.log(name,model,processor,"\n",show);




