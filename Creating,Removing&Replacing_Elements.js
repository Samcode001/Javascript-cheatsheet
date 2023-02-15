let element=document.createElement('li');
let text=document.createTextNode('I am Text Node');
element.appendChild(text);
// console.log(element);

// Add a Class Name to the li element
element.className='childul';
element.id='createdli';
element.setAttribute('title','mytittle');

// element.innerText='<b>Hello I am Sam</b>';
// element.innerHTML='<b>Hello I am Sam</b>';

let ul=document.querySelector('.this');
ul.appendChild(element);

// console.log(ul);
// console.log(element);

let elem2=document.createElement('h3');
elem2.className='elem2';
elem2.id='elem2';

let tnode=document.createTextNode('Hello Elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);




