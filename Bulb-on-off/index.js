let a = document.getElementById('bulboff');
let b = document.getElementById('btn1');
let c = document.getElementById('btn2');
b.addEventListener('click', function()
{
    a.src="./img/bulb-on.avif";
    // if(a.src.match('blub on')){
    // b.style.backgroundColor="blue";
    // b.style.color="white";
    // }
});
c.addEventListener('click', function()
{
    a.src="./img/bulb-off.avif";
});
