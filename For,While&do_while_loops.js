//General llop

// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }
// let j=0;
// while(j<10)
// {
//     console.log(j);
//     j++;
// }
// let k=0;

// do{
//     console.log(k);
//     k++;
// }while(k>10);

let arr=[2,3,4,5,9];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    }

   arr.forEach(function(element,index,array){
    //    console.log(element,index,array);
   }) ;

   let obj={
       name:"Sam",
       age:20,
       type:"cool",
       os:"windows"
   
   }
   for(let key in obj){
    //    console.log(`The ${key} of object is ${obj[key]}`);
   }
