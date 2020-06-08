let die = document.querySelector('#user-input');
let roll = document.querySelector('#roll');
let total = document.querySelector('#total');
let showAllrolls = document.querySelector('#show-all-rolls');
let allRolls = document.querySelector('#all-rolls');
let reset = document.querySelector('#reset')

let dieRolls = []

roll.addEventListener('click', function () {


    let numberOfdie = parseInt(die.value)
    console.log('number of dice', numberOfdie)






    for (let index = 0; index < numberOfdie; index++) {

        let rollingThedie = Math.floor(Math.random() * 6) + 1
        console.log(rollingThedie)

        dieRolls.push(rollingThedie)

    }
    console.log(dieRolls)
    let addingSums = 0
    for (let index = 0; index < dieRolls.length; index++) {
        addingSums += dieRolls[index]

    }
    console.log(addingSums)

    total.innerHTML = addingSums
})

for (let index2 = 0; index2.length <= 0; index2++) {
    total = index2 + dieRolls.push[index2]
    console.log("total")
}


showAllrolls.addEventListener('click', function () {


    //* write a new loop that loops over the dieRolls array creating a new list item for each number and adding that list to the innerHTML of the allRolls element. This LI should show the value of the roll.//*

    console.log (allRolls)
for( let index=0; index < dieRolls.length; index+=1){
    let newListitem='<li class="all-rolls">' + dieRolls[index] + '</li>'
        allRolls.innerHTML +=newListitem ;
    

        console.log(newListitem)
}

    
})



reset.addEventListener('click', function () {
    console.log('times reset')


})
