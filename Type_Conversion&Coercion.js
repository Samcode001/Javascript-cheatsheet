// Type Conversion
let myVar=String(34);
console.log(myVar+typeof myVar);

let booleanVar=String(true);
console.log(booleanVar+ typeof booleanVar);

let date=String(new Date());
console.log(date + typeof date);

let arr=String([1,4,2,5]);
console.log(arr.length+typeof arr);

let i=90;
console.log(i.toString());//we can type cast by this method easily

let stri=Number("3434");
    stri=Number("34d34");
    stri=Number(false);
    stri=Number([1,4,2,3,]);
console.log(stri,(typeof stri));

let number=parseInt('32.99483');
    number=parseFloat('32.99483');
console.log(number);
console.log(number.toFixed(2),(typeof number));

// Type Coercion

let mystr=Number("12");
let mynum=34;
console.log(mystr+mynum);

