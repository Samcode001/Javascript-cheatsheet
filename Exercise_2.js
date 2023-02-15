// let node=document.createElement('div');
// let tnode=document.createTextNode("THis is Edit");
// node.className='Edit';
// node.id='edit';
// node.append(tnode);

// let cont=document.querySelector('.container');
// cont.append(node);

// var a;
// node.addEventListener('click',function()
// {
//      a=prompt("Write Your Note");
//     node.innerHTML=a;
    
// })

// let local=document.querySelector('.Edit');

// local.addEventListener('blur',function()
// {
//     localStorage.clear();
//     localStorage.setItem('Edit',a);
// })

let sel=document.querySelector(".edit");

sel.addEventListener("click",func);

function func(){
let a=prompt("Type");
sel.innerHTML=a;
// sel.appendChild(a);
}