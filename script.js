const footer = document.querySelector(".footer");
const start = document.querySelector(".btnstart")
const main = document.querySelector(".start")
const options = ['Rock','Paper',"Scissors"]
const scoreplayer = document.querySelector(".scoreplayer")
const scoremachine = document.querySelector(".scoremachine")
let score_p = 0
let score_m = 0
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const announce = document.querySelector(".announce")
start.onclick = function(){
    footer.classList.remove("disabled");
    main.classList.add("disabled")
}
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min + 1)) + min
}
// console.log(getRandomInt(0,2))
function getRandomOption(){
    const index = getRandomInt(0,2)
    return options[index]
}
console.log(getRandomOption())
rock.onclick = function(){
    let computerchoice = getRandomOption()
    if(computerchoice == "Rock"){
        announce.innerHTML = "Draw <br>computer's choice was draw"
    }
    else if(computerchoice == "Paper"){
        announce.innerHTML = "Player's loose <br>computer's choice was paper"
        score_m += 1
        scoremachine.innerHTML = score_m
    }
    else if(computerchoice == "Scissors"){
        announce.innerHTML = "Player's win <br>computer's choice was scissors"
        score_p += 1
        scoreplayer.innerHTML = score_p
    }
}
paper.onclick = function(){
    let computerchoice = getRandomOption()
    if(computerchoice == "Rock"){
        announce.innerHTML = "Player's win <br>computer's choice was rock"
        score_p += 1
        scoreplayer.innerHTML = score_p
    }
    else if(computerchoice == "Paper"){
        announce.innerHTML = "Draw <br>computer's choice was paper"
    }
    else if(computerchoice == "Scissors"){
        announce.innerHTML = "Player's loose <br>computer's choice was scissors"
        score_m +=1 
        scoremachine.innerHTML = score_m
    }
}
scissors.onclick = function(){
    let computerchoice = getRandomOption()
    if(computerchoice == "Paper"){
        announce.innerHTML = "Player's win <br>computer's choice was paper "
        score_p += 1
        scoreplayer.innerHTML = score_p
    }
    else if(computerchoice == "Scissors"){
        announce.innerHTML = "Draw <br>computer's choice was scissors"
    }
    else if(computerchoice == "Rock"){
        announce.innerHTML = "Player's loose <br>computer's choice was Rock"
        score_m +=1 
        scoremachine.innerHTML = score_m
    }
}

