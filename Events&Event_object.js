document.getElementById('heading').addEventListener('click',function(e)
{
    let variable;
    console.log("You Clicked the Heading");
    variable=e.target;
    variable=e.target.className;
    variable=Array.from(e.target.classList)
    variable=e.target.id;
    variable=e.offsetX;
    variable=e.offsetY;
    variable=e.clientX;
    variable=e.clientY;
    console.log(variable);
    // location.href='//codewithharry.com';//lands in website u want
});

let btn=document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener("mousedown",func3);
btn.addEventListener('dblclick',func2);

function func1(e)
{
      console.log("Thanks",e);
}

function func2(e)
{
   console.log("Thanks Its a duoble Click");
}
function func3(e)
{
    console.log("Thnaks thast a moud=sedowbn");
}

document.querySelector('.no').addEventListener('mouseenter',function()
{
    console.log("You Entered The Div");
})
document.querySelector('.no').addEventListener('mouseleave',function()
{
    console.log("You leaved the div");
})

document.querySelector('.container').addEventListener('mousemove',function(e)
{
        //   console.log(e.offsetX,e.offsetY);
        document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},${e.offsetY})`
        console.log("Triggered")
})


