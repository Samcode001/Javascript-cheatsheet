const Name='Harry';
const greeting='Good Morning';
console.log(greeting, Name);

let html;
html="<h1> This is heading</h1>"+
     "<p> This is Para</p>";
     console.log(html);
 
html=html.concat('this','str2');
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(30));
console.log(html.endsWith('str222\\'));//returns bool
console.log(html.includes('this'));//returns bool
console.log(html.substring(1,9));
console.log(html.slice(1,8));
console.log(html.split('<'));//returns the string in array 
// console.log(html.replace('This','it'));

let fruit1='Orange';
let fruit2='Banana';
let myhtml=`Hello ${name} 
<h1> This is "my" my heading</h1>
<p>You like ${fruit1} and ${fruit2}`;
document.body.innerHTML=myhtml;