function ui(name)
{
    let i=8;
    console.log(i);
    return `This is a ${name} ui function`;
}
console.log(ui("sam"));
const mygreet=function(name,thank='Thank you')
{
    let msg=`happy Both ${name} ${thank}`;
    return msg;
}
let name='SkillF';
let name2='Sam';

let val=mygreet(name,`Thanks a lot`);
console.log(val);

const myobj={
              name:"SkillF",
              game:function(){
                    return "Gta";
              }
}
// console.log(myobj.game());

arr=['fruit','vegetable','Furniture'];
arr.forEach(function(element,index,array)
{
    console.log(element,index,array);
});
if(1){
    let i=45;
    console.log(i);
}



