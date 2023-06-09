let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let message = " "
let messageEl= document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Dipanshu",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":$"+player.chips

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*14)
    if(randomCard > 10){
        return 10
    }
    else if(randomCard === 1){
        return 11
    }
    else{
        return randomCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i]+ " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "Wohoo! You've got a BlackJack"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard(){
    // only allow the player to get a new card ifAlive and doesn't have Blckjack

    if(isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard()
        cards.push(thirdCard)
        sum += thirdCard
        renderGame()
    }
}