let die = document.querySelector ('#die');
let roll = document.querySelector ('#roll');
let total = document.querySelector ('#total');
let showAllrolls = document.querySelector ('#show-all-rolls');
let allRolls= document.querySelector ('#all-rolls');

let dieRolls= []

roll.addEventListener ('click', function (){
    console.log ("rolled the die!")
    let diceToroll=Number(die.innerHTML) +1;
    die.innerHTML= diceToroll
})


let xAmountofTimes=Math.floor(Math.random()*5) +1



if (xAmountofTimes <5){
let howDicerolled= Number(die.innerHTML)+1
die.innerHTML=howDicerolled
    console.log ("yea!")
}

else {

 (xAmountofTimes >=5)

    console.log("nay!")
}

let total = (dieRolls.length +die.innerHTML)

showAllrolls.addEventListener ('click', function ()
{
    console.log('show all rolls')

let i=0

while(i<dieRolls.length){
console.log('dice rolled this many times')
i++}

dieRolls.push("");

let showAllrolls = '<li class= "all-rolls">'+ dieRolls + "</ii>";
allRolls.innerHTML +=showAllrolls;


})






