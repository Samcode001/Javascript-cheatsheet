let impArray=['adrak','pyaz','bhindi'];

//Add a key-value pair inside local storage
localStorage.setItem('name','sam');
localStorage.setItem('name2','hari');
localStorage.setItem('sabzi',JSON.stringify(impArray));//Saves As a Array
localStorage.setItem('sabzi',impArray);//Saves As a String

// localStorage.clear();
// localStorage.removeItem('name2')//Removes a particular data

//Retrieve an item from the local Storage
let elem=localStorage.getItem('sabzi');
elem=JSON.parse(localStorage.getItem('sabzi'));//Prints  element in Array 
console.log(elem);

sessionStorage.setItem('session-Name','hhaeey');
sessionStorage.setItem('sabzi',JSON.stringify(impArray));
let elem2=sessionStorage.getItem('session-Name');
  elem2=JSON.parse(sessionStorage.getItem('sabzi'));
console.log(elem2);
