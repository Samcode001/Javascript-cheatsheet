// let today=new Date(0);
// console.log(today);
// let otherDate=new Date('1-4-2003 04:54:08');
// otherDate=new Date('june 12 1997'); // Sun=0  & Mon=1 .... Sat=6
// otherDate=new Date('11/13/2022 04:14:04:100');//  mm/dd/yy Format
// console.log(otherDate);

// let a;
// a=otherDate.getDay();
// a=otherDate.getDate();
// a=otherDate.getMinutes();
// a=otherDate.getSeconds();
// a=otherDate.getHours();
// a=otherDate.getTime()
// a=otherDate.getMilliseconds();
// a=otherDate.getMonth();// Gives months form 0-11=Jan-Dec
// console.log(a);

// otherDate.setDate(4);
// otherDate.setMonth(0);
// otherDate.setFullYear(1990);
// otherDate.setMinutes(22);
// otherDate.setSeconds(22);
// console.log(otherDate);



//Use of 'this'

function bike() {
    console.log(this.name);
  }
  
  var name = "Ninja";
  var obj1 = { name: "Pulsar", bike: bike };
  var obj2 = { name: "Gixxer", bike: bike };
  
  bike();           // "Ninja"
  obj1.bike();      // "Pulsar"
  obj2.bike();      // "Gixxer"

