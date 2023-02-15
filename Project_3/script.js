// d9af89b891fa493488911f16642a9ba7   Your ApiKey
console.log("scrpt");

let content=document.getElementById("collapseWidthExample");


async function getData(){
    let response=await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=d9af89b891fa493488911f16642a9ba7');
    let data=await response.json();
    return data.articles;
} 
let val=getData();
val.then(data=>{
    let html="";
    data.forEach((element,index)=>{
        console.log(index,element);
        html+=` 
         <div class="card card-body" id="content" style="width: 1000px;">
        <h4>${element.title}</h4>
       ${element.description}
       <a href='${element.url}' target='_blank'>Read More...</a>
      </div>`
      })
      content.innerHTML=html;
});
// console.log(data);
const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))