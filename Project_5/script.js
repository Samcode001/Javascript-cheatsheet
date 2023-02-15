console.log("Hello this is himanshu jaiswal")

let next=document.getElementById("next");
console.log(next);

let data=[
    {
        name:"Sam",
        place:"Mumbai",
        language:"JavaScript",
        framework:"React",
        image:"https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name:"Jogy",
        place:"Handia",
        language:"Python",
        framework:"Django",
        image:"https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
        name:"Priya",
        place:"Pune",
        language:"Java",
        framework:"Musca",
        image:"https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        name:"Birju",
        place:"Delhi",
        language:"Kotlin",
        framework:"Flutter",
        image:"https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
        name:"Dee",
        place:"Agra",
        language:"C#",
        framework:"Angular",
        image:"https://randomuser.me/api/portraits/men/9.jpg"
    }
];

function cvIterator(profile){
    let index=0;
    return{
        next:function(){
            return index<profile.length ? {value:profile[index++],done:false}:{done:true};
        }
    }
}

let candidate=cvIterator(data);
let image=document.getElementById('image');
let name=document.getElementById("name");
let place=document.getElementById("place");
let language=document.getElementById("language");
let framework=document.getElementById("framework");
console.log(image,name,place,language,framework);


next.addEventListener('click',()=>{
    let currentCandidate=candidate.next().value;
    if(currentCandidate!=null){
   image.innerHTML=`<img src="${currentCandidate.image}" >`;
   name.innerHtml=`Name:${currentCandidate.name}`;
   place.innerHTML=`Lives in ${currentCandidate.place}`;
   language.innerHTML=`Works with ${currentCandidate.language}`;
   framework.innerHTML=`Uses ${currentCandidate.framework} Framework`
    }
    else{
        alert("End of the List.");
        window.location.reload(); // Reset the page
    }
})