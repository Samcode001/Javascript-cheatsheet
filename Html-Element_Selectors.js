//Single Element Selector

let element=document.getElementById('myfirst');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
// console.log(element);
// element.style.color='red';
// element.innerText="Hello ";
// element.innerHTML=" <b>Hello</b>";
console.log(element);

let sel=document.querySelector('#myfirst');
 sel=document.querySelector('.child');
//  sel=document.querySelector('div');
 sel.style.color='green';
// console.log(sel);

//Multi Element Selector

let elem=document.getElementsByClassName('child');
// elem=document.getElementsByClassName('container');
// elem=document.getElementsByTagName('div');
// console.log(elem);
// for (let i = 0; i < elem.length; i++) {
//     const element = elem[i];
//     console.log(element);
//     // element.style.color='blue';
// }

Array.from(elem).forEach(function(element)
{
    // console.log(element);
});

// console.log(elem[0].getElementsByClassName('child'));



