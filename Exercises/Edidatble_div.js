console.log("Editable Div");
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Making an Editable div
let divElem=document.createElement("div");
// let text=document.createTextNode('Hello I m editable div');
let val=localStorage.getItem('text');
let text;
if(val==null){
     text=document.createTextNode('Hello I m editable div');
}else{
     text=document.createTextNode(val);
}
divElem.appendChild(text);
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border: 2px solid black;width:180px;height:50px;margin:4px;padding:8px;')

// Postioning The element
let container=document.querySelector(".container");
let nextNode=document.getElementById("myfirst");
// console.log(divElem,container,nextNode);

container.insertBefore(divElem,nextNode); // By this We Insert The element

// Event Listener

divElem.addEventListener('click',()=>{
           let textareaNo=document.getElementsByClassName("textarea").length;
           if(textareaNo==0){
    let html=elem.innerHTML;
    divElem.innerHTML=`<textarea class='textarea' id='textarea'>${html}</textarea>`;
           }
          
           // For saving div the blur event by using textarea
           let textarea=document.getElementById("textarea");
           textarea.addEventListener('blur',()=>{
               elem.innerHTML=textarea.value;
               localStorage.setItem('text',textarea.value);
           })
        })